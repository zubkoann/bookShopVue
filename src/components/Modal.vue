<template>
  <div class="modal bd-example-modal-xl">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header" @click="toggleModal">
          <h5 class="modal-title" id="exampleModalLongTitle">Форма заказа</h5>
          <div class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </div>
        </div>
        <div class="modal-body" v-if="bookChose">
          <div class="d-flex my-3">
            <div class="card" style="width: 18rem;">
              <img :src="bookChose.volumeInfo.imageLinks.smallThumbnail" class="card-img-top" alt />
            </div>
            <div class="card-description">
              <h5 class="card-title">{{bookChose.volumeInfo.title}}</h5>
              <p>{{bookChose.volumeInfo.description}}</p>
              <h4 v-if="bookChose.saleInfo.listPrice">
                Цена:
                <span>{{bookChose.saleInfo.listPrice.amount+ ' '+ bookChose.saleInfo.listPrice.currencyCode}}</span>
              </h4>
              <!-- <div type="button" @click="deleteBookFromBukket(index)" class="btn btn-danger">Удалить </div> -->
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Email"
              class="form-control"
              v-model="client.email.value"
            />
            <div
              class="alert alert-danger"
              role="alert"
              v-if="!client.email.valid && client.email.checked"
            >E-mail не валиден</div>
            <div class="my-2">
              <input type="text" placeholder="Имя" class="form-control" v-model="client.name.value" />
              <div
                class="alert alert-danger"
                role="alert"
                v-if="!client.name.valid && client.name.checked"
              >Имя не валидно</div>
            </div>

            <div class="my-2">
              <input
                type="text"
                class="form-control"
                placeholder="+380XXXXXXXXX"
                v-model="client.phone.value"
              />
              <div
                class="alert alert-danger"
                role="alert"
                v-if="!client.phone.valid && client.phone.checked"
              >Телефон не валиден</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn btn-primary" @click="submitOrder">Заказать</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemSmall from "@/components/ItemSmall.vue";
import { mapActions } from "vuex";

export default {
  name: "Modal",
  props: ["index"],
  data() {
    return {
      bookChose: this.$store.state.bookChose,
      client: {
        email: {
          checked: false,
          value: "",
          reg: /([\w-_\.]+)(@\w+)(\.\w{2,7})/i,
          valid: false
        },
        name: {
          checked: false,
          reg: /..+/,
          value: "",
          valid: false
        },
        phone: {
          checked: false,
          reg: /\+380[0-9]{9}$/,
          value: "",
          valid: false
        }
      },
      emailState: {
        changed: false,
        valid: false
      }
    };
  },
  methods: {
    ...mapActions(["toggleModal"]),
    submitOrder() {
      for (let key in this.client) {
        this.client[key].valid = this.client[key].reg.test(
          this.client[key].value
        );
        this.client[key].checked = true;
      }
      if (Object.values(this.client).some(item => !item.valid)) return;
      this.$store.dispatch("addToBukket", this.$store.state.bookChose.id);
      for (let key in this.client) {
        this.client[key].value = "";
        this.client[key].checked = false;
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  background: #00000087;
}
.card {
  width: 20%;
}
.card-description {
  width: 80%;
}
.modal-dialog {
  max-width: 80%;
}
</style>