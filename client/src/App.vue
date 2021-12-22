<template>
  <div id="app">
    <div id="menu">
      <a href="#">Ricerca Prodotto</a>
      <a href="preferiti.js">Preferiti</a>
      <a href="cronologia.js">Cronologia</a>
    </div>

    <div id="ricerca">
      <div class="input-group mb-3">
        <input
          id="ricerca"
          type="text"
          class="form-control"
          placeholder="Inserisci nome prodotto.."
        />
        <button class="btn btn-success" type="submit" v-on:click="cerca()">
          Cerca
        </button>
      </div>
      <ul class="list-group">
        <li
          class="list-group-item p-3 product-entry"
          v-for="p in prodotti"
          :key="p.nome"
        >
          <Prodotto :prodotto="p" />
        </li>
      </ul>
      <h3 v-if="prodotti == []">
        Inserisci una stringa per effettuare la ricerca
      </h3>
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
    return {
      prodotti: [],
    };
  },
  methods: {
    cerca: function () {
      let stringa = document.getElementById("ricerca");
      console.log(stringa.value);
      this.prodotti = [
        {
          nome: "Prodotto1",
          prezzo: 5.0,
          sito: "amazon",
          preferito: true,
          valuta: "$",
          link: "https://prova.com",
        },
        {
          nome: "Prodotto2",
          prezzo: 10.0,
          sito: "ebay",
          preferito: false,
          valuta: "$",
          link: "https://prova.com",
        },
        {
          nome: "Prodotto3",
          prezzo: 2.0,
          sito: "wish",
          preferito: false,
          valuta: "$",
          link: "https://prova.com",
        },
      ];
    },
  },
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

#ricerca {
  display: grid;
  grid-template-columns: 50%;
  justify-content: center;
  margin-top: 2%;
}
</style>
