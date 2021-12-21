<template>
  <vs-popup title="Prova" :active.sync="attivo">
    <p class="alert alert-danger">Errore</p>
  </vs-popup>
</template>

<script>
export default {
  name: "PopupProdotto",
  props: {
    prodotto: Object,
    default: () => ({}),
    attivo: Boolean,
  },
};
</script>

<style scoped>
</style>
