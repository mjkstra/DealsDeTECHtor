<template>
  <div id="prodotto">
    <a href="#" class="text-decoration-none text-dark"
      ><div>{{ nome }} ({{ sito }})</div></a
    >
    <div style="justify-self: end">{{ prezzo.toFixed(2) }}{{ valuta }}</div>
    <b-icon
      v-if="isPreferito == true"
      icon="star-fill"
      style="font-size: 24px; justify-self: end"
      v-on:click="cambiaIcona()"
    ></b-icon>
    <b-icon
      id="icona"
      v-else
      icon="star"
      style="font-size: 24px; justify-self: end"
      v-on:click="cambiaIcona()"
    ></b-icon>
  </div>
</template>

<script>
export default {
  name: "Prodotto",
  props: {
    nome: String,
    prezzo: Number,
    sito: String,
    preferito: Boolean,
    valuta: String,
  },
  data() {
    return { isPreferito: this.preferito };
  },
  methods: {
    cambiaIcona: function () {
      this.isPreferito = !this.isPreferito;
      //document.getElementById("icona").icon = this.preferito
      //? "bi-star-fill"
      //: "bi-star";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#prodotto {
  display: grid;
  grid-template-columns: 80% 10% 10%;
  align-items: center;
}
</style>
