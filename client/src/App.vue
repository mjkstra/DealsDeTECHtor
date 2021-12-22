<template>
  <div id="app">
    
    <div id="title">DealsDeTECHtor</div>
    
    <div id="menu">
      <a href="main.js">Ricerca Prodotto</a>
      <a href="preferiti.js">Preferiti</a>
      <a href="cronologia.js">Cronologia</a>
    </div>

    <div id="boxricerca">

      <div class="input-group mb-3">
          <input 
            id="ricerca" 
            type="search"
            class="form-control"
            placeholder="Inserisci nome prodotto.." />

        <button type="button" class="btn btn-primary" v-on:click="cerca()">
          <b-icon icon="search"></b-icon>
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
          prezzo: 5.2,
          sito: "Amazon",
          valuta: "$",
          link: "https://www.amazon.com/search/?name=prodotto1"
        },
        {
          nome: "Prodotto2",
          prezzo: 10.3,
          sito: "Ebay",
          valuta: "$",
          link: "https://www.ebay.com/search/?name=prodotto2"
        },
        {
          nome: "Prodotto3",
          prezzo: 2.1,
          sito: "Wish",
          valuta: "$",
          link: "https://www.wish.com/search/?name=prodotto3"
        }
      ];
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  background-color: lightblue;
  height: 100vh;
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

#boxricerca {
  display: grid;
  grid-template-columns: 35%;
  justify-content: center;
  margin-top: 2%;
}

#title{
  font-size:3vw;
  font-weight: bold;
  text-align:center;
  background-color: lightgray;
}

</style>
