<template>
  <div class="book m-2">
    <div class="card" style="width: 18rem;">
      <img :src="bucketItem.volumeInfo.imageLinks.smallThumbnail" class="card-img-top" alt />
    </div>
    <!-- <p class="card-text">{{bucketItem.volumeInfo.description}}</p> -->
    <div>
      <h5 class="card-title">{{bucketItem.volumeInfo.title}}</h5>
      <h4 v-if="bucketItem.saleInfo.listPrice">
        Цена:
        <span>{{bucketItem.saleInfo.listPrice.amount+ ' '+ bucketItem.saleInfo.listPrice.currencyCode}}</span>
      </h4>
    </div>
    <div type="button" @click="deleteBookFromBukket(index)" class="btn btn-danger">Удалить</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ItemSmall",
  props: ["bucketItem", "index"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["deleteBookFromBukket"])
  }
};
</script>

<style scoped>
.book {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card {
  width: 10rem !important;
}
.card h5 {
  font-size: 1.1rem;
}
.card-body {
  position: relative;
  padding-bottom: 30px;
}
.button-block {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>