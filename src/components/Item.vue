<template>
  <div class="book m-2">
    <div class="card" style="width: 18rem;">
      <img :src="bookItem.volumeInfo.imageLinks.smallThumbnail" class="card-img-top" alt />
      <div class="card-body">
        <h4 class="card-title">{{bookItem.volumeInfo.title}}</h4>
        <!-- <p class="card-text">{{bookItem.volumeInfo.description}}</p> -->
        <h6>Автор: {{ bookItem.volumeInfo.authors | formatAuther}}</h6>
        <h6>Год выпуска: {{bookItem.volumeInfo.publishedDate | formatDate}}</h6>
        <h4 v-if="bookItem.saleInfo.listPrice">
          Цена:
          <span>{{bookItem.saleInfo.listPrice.amount+ ' '+ bookItem.saleInfo.listPrice.currencyCode}}</span>
        </h4>
        <div class="button-block" v-if="bookItem.saleInfo.listPrice">
          <a href="#" class="btn btn-primary" @click="setChosenBook(index)">Купить</a>
        </div>
        <div class="button-block" v-else>
          <a href="#" class="btn btn-danger">Нет в наличии</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Item",
  props: ["bookItem", "index"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addToBukket", "setChosenBook", "openOrderModal"])
  },
  filters: {
    formatDate(date) {
      if (!date) return "";
      let arr = date
        .split("-")
        .reverse()
        .join(".");
      return `${arr}`;
    },
    formatAuther(name) {
      if (!name) return "";
      let arr = name.join();
      return `${arr}`;
    }
  }
};
</script>
<style scoped>
.card-img-top {
  max-height: 400px;
}
.card {
  height: 100%;
}
.card-body {
  position: relative;
  padding-bottom: 45px;
}
.button-block {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
.button-block a {
  width: 100%;
}
</style>