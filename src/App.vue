<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">На главную</router-link>
      <router-link to="/Cart">
        <Bucket />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Bucket from "@/components/Bucket.vue";
export default {
  components: {
    Bucket
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  text-align: left;
  padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
