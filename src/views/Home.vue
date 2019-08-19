<template>
  <div class="home">
    <SearchForm />
    <div class="card-block d-flex flex-wrap align-content-stretch justify-content-center">
      <Item
        v-for="(book,  index) in $store.state.books"
        v-show="book.saleInfo.listPrice || book.saleInfo.retailPrice "
        :book-item="book"
        :key="index"
        :index="index"
      />
    </div>
    <div v-if="$store.state.openedModal">
      <Modal />
    </div>
    <div v-if="$store.state.showNotify">
      <ModalOrdered />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";
import ModalOrdered from "@/components/ModalOrdered.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
    Item,
    Modal,
    ModalOrdered
  }
};
</script>
<style scoped>
.home {
  position: relative;
}
</style>
