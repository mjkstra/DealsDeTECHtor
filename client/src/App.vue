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
          />
          <Prodotto :nome="p.nome" :sito="p.sito" :prezzo="p.prezzo" v-else />
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
    return {
      prodotti: [
        {
          nome: "Prodotto1",
          prezzo: 5.0,
          sito: "amazon",
          preferito: true,
        },
        {
          nome: "Prodotto2",
          prezzo: 10.0,
          sito: "ebay",
          preferito: false,
        },
        {
          nome: "Prodotto3",
          prezzo: 2.0,
          sito: "wish",
          preferito: false,
        },
      ],
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

#ricerca {
  display: grid;
  grid-template-columns: 50%;
  justify-content: center;
  margin-top: 2%;
}
</style>
