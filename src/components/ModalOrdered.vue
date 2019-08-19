<template>
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Спасибо за заказ</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4>Ваш заказ составил {{totalPrice}} грн</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalOrdered",
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice.toFixed(2);
    }
  },
  destroyed() {
    this.$store.state.bucket = [];
    this.$store.state.totalPrice = 0;
    this.$store.state.count = 0;
  }
};
</script>

<style scoped>
.modal {
  display: block;
  background: #00000087;
}
</style>
