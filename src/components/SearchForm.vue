<template>
  <div class="searchForm">
    <h1>Книжный магазин</h1>
    <div class="form-row align-items-center justify-content-center my-3">
      <div class="col-7 my-1">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Название книги"
          v-model="searchText"
        />
      </div>
      <div class="col-2 my-1">
        <button type="button" class="btn btn-primary" @click.prevent="searchBooks">Поиск</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    searchBooks() {
      this.$store.dispatch("searchBooks", this.searchText);
    }
  }
};
</script>