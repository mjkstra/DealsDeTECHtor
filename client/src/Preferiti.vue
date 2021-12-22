<template>
  <div id="app">
    <div id="menu">
      <a href="main.js">Ricerca Prodotto</a>
      <a href="#">Preferiti</a>
      <a href="cronologia.js">Cronologia</a>
    </div>
    <div id="cronologia">
      <ul class="list-group">
        <li
          class="list-group-item p-3 product-entry"
          v-for="p in prodotti"
          :key="p.nome"
        >
          <Prodotto :prodotto="p" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Prodotto from "./components/Prodotto.vue";

export default {
  name: "App",
  components: {
    Prodotto,
  },
  props: {},
  data() {
    let xhttp = new XMLHttpRequest();
    let prodotti = [];
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log("Connessione riuscita");
        console.log(xhttp.responseText);
        prodotti = JSON.parse(xhttp.responseText);
      }
    };
    xhttp.open("GET", "http://192.168.125.183:1234/preferiti", false);
    xhttp.send();
    return {
      prodotti: prodotti,
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  background-color: lightblue;
  min-height: 100%;
}

#menu {
  display: flex;
  background-color: #e9e9e9;
  justify-content: center;
}

#menu a {
  display: block;
  background-color: inherit;
  color: black;
  font-size: 17px;
  padding: 1%;
  text-decoration: none;
}

#menu a:hover {
  display: block;
  background-color: lightgray;
}
</style>
