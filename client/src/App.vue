<template>
  <div id="app">
    <button @click.prevent="cambiaScritta" class="btn btn-primary">
      Clicca
    </button>
    <p>{{ scritta }}</p>
    <Prodotto nome="Prodotto1" prezzo="1.00€" />
  </div>
</template>

<script>
import Prodotto from "./components/Prodotto.vue";

export default {
  name: "App",
  components: {
    Prodotto,
  },
  props: {
    awesome: Boolean,
  },
  data() {
    return { scritta: "Hello world" };
  },
  methods: {
    cambiaScritta: function () {
      this.scritta = "Funziona!!!!!!!!!!!!";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
