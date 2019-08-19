<template>
  <div class="home">
    <div class="card-block">
      <ItemSmall
        v-for="(bucketBook,  index) in $store.state.bucket"
        :bucket-item="bucketBook"
        :key="index"
        :index="index"
      />
      <h4 class="my-4">ИТОГО: {{totalPrice}}</h4>
      <div class="btn btn-primary btn-lg btn-block" @click="confirmOrder">Заказать</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";
import ItemSmall from "@/components/ItemSmall.vue";
import router from "@/router";

export default {
  name: "home",
  components: {
    SearchForm,
    ItemSmall
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice.toFixed(2);
    }
  },
  methods: {
    confirmOrder() {
      router.replace("/");
      this.$store.dispatch("sendOrder");
    }
  }
};
</script>
<style scoped>
.home {
  position: relative;
}
</style>
