<template>
 <div class="bucket-block" >
  <font-awesome-icon icon="shopping-basket" size="3x"/>
  <p> {{ count }} </p>
  <h6> {{(totalPrice>0) ? totalPrice: ''}}
</h6>   
</div>         
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faDragon,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faDragon, faShoppingBasket)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default  {
    name: 'Bucket',
    components: {
       },
  computed: {
    count() {
      return this.$store.state.count;
    },
    totalPrice() {
      return this.$store.state.totalPrice.toFixed(2);
    }
  }
};
</script>
<style scoped>
.bucket-block{
  position: absolute;
  right: 10%;
  top: 0;
}
.bucket-block p{
  position: absolute;
  top: 0;
  left: 100%;
}

.bucket-block h6{
  position: absolute;
  bottom: 0;
  left: 100%;
}
</style>
