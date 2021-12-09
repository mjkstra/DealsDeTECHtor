<template>
  <div id="prodotto">
    <h1>{{ nome }}</h1>
    <p>Prezzo: {{ prezzo }}</p>
  </div>
</template>

<script>
export default {
  name: "Prodotto",
  props: {
    nome: String,
    prezzo: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
