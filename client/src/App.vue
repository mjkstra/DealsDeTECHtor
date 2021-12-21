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
          type="text"
          class="form-control"
          placeholder="Inserisci nome prodotto.."
        />
        <button class="btn btn-success" type="submit">Cerca</button>
      </div>
      <ul class="list-group">
        <li
          class="list-group-item p-3 product-entry"
          v-for="p in prodotti"
          :key="p.nome"
        >
          <Prodotto
            :nome="p.nome"
            :sito="p.sito"
            :prezzo="p.prezzo"
            preferito
            v-if="p.preferito == true"
            :v-on:click="mostraPopup(p)"
          />
          <Prodotto
            :nome="p.nome"
            :sito="p.sito"
            :prezzo="p.prezzo"
            :valuta="p.valuta"
            :v-on:click="mostraPopup(p)"
            v-else
          />
        </li>
      </ul>
    </div>
    <popup-prodotto />
  </div>
</template>

<script>
import PopupProdotto from "./components/PopupProdotto.vue";
import Prodotto from "./components/Prodotto.vue";

export default {
  name: "App",
  components: {
    Prodotto,
    PopupProdotto,
  },
  props: {},
  data() {
    return {
      prodotti: [
        {
          nome: "Prodotto1",
          prezzo: 5.0,
          sito: "amazon",
          preferito: true,
          valuta: "$",
        },
        {
          nome: "Prodotto2",
          prezzo: 10.0,
          sito: "ebay",
          preferito: false,
          valuta: "$",
        },
        {
          nome: "Prodotto3",
          prezzo: 2.0,
          sito: "wish",
          preferito: false,
          valuta: "$",
        },
      ],
    };
  },
  methods: {
    mostraPopup: function (prodotto) {
      let popup = document.getElementById("popup");
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
