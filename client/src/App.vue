<template>
  <div id="app">
    <div id="menu">
      <a href="#">Ricerca Prodotto</a>
      <a href="#">Preferiti</a>
      <a href="#">Cronologia</a>
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
          v-on:click="mostraPopup(p)"
        >
          <Prodotto
            :nome="p.nome"
            :sito="p.sito"
            :prezzo="p.prezzo"
            preferito
            v-if="p.preferito == true"
          />
          <Prodotto
            :nome="p.nome"
            :sito="p.sito"
            :prezzo="p.prezzo"
            :valuta="p.valuta"
            v-else
          />
        </li>
      </ul>
      <h3 v-if="prodotti == []">
        Inserisci una stringa per effettuare la ricerca
      </h3>
    </div>
    <PopupProdotto id="popup" />
  </div>
</template>

<script>
import PopupProdotto from "./components/PopupProdotto.vue";
import Prodotto from "./components/Prodotto.vue";

function convertToJSON(object) {
  let text = "{";
  for (let key in object) {
    text += key + '"' + object[key] + '",';
  }
  text += "}";
  return text;
}

export default {
  name: "App",
  components: {
    Prodotto,
    PopupProdotto,
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
    mostraPopup: function (prodotto) {
      let popup = document.getElementById("popup");
      console.log(convertToJSON(prodotto));
      if (popup != null) {
        popup.prodotto = prodotto;
        popup.attivo = true;
      }
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
