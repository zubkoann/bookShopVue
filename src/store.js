import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bucket: [],
    count: 0,
    totalPrice: 0,
    bookChose: {},
    openedModal: false,
    showNotify: false
  },
  mutations: {
    searchBooks(state, payload) {
      state.books = '';
      state.books = payload.items;
    },
    addToBukket(state, id) {
      state.count++;
      const book = state.books.filter(item => item.id === id);
      state.bucket.push(book[0]);
      state.totalPrice = state.bucket.reduce((acc, cur) => cur.saleInfo.listPrice ?
        acc + cur.saleInfo.listPrice.amount : acc, 0);
      state.bookChose = {};
    },
    deleteBookFromBukket(state, index) {
      state.count--;
      state.totalPrice -= state.bucket[index].saleInfo.listPrice.amount;
      state.bucket.splice(index, 1);
    },
    setChosenBook(state, index) {
      state.openedModal = true;
      state.bookChose = state.books[index];
    },
    toggleModal(state) {
      state.openedModal = false;
    },
    toggleNotify(state) {
      state.showNotify = !state.showNotify;
    },
    clearBucket(state) {
      state.bucket = [];
      state.totalPrice = 0;
      state.count = 0
    },
  },
  actions: {
    searchBooks({
      commit
    }, searchText) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => commit('searchBooks', json))
    },
    addToBukket({
      commit
    }, id) {
      commit('addToBukket', id);
      commit('toggleModal');
    },
    deleteBookFromBukket({
      commit
    }, index) {
      commit('deleteBookFromBukket', index)
    },
    toggleModal({
      commit
    }) {
      commit('toggleModal');
    },
    setChosenBook({
      commit
    }, index) {
      commit('setChosenBook', index);
    },
    submitOrder({
      commit
    }, payload) {
      commit('addBookToCart', payload);
      commit('countCartTotal');
      commit('clearChosenBook');
    },
    sendOrder({
      commit
    }) {
      commit('toggleNotify');
      setTimeout(function () {
        commit('toggleNotify');
      }, 2000);
      // commit('clearBucket');
    }
  }
})