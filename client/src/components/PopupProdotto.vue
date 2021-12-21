<template>
  <div class="wrapper" v-if="attivo == true">
    <div class="modal">
      <p>Dettagli prodotto</p>
      <hr />
      <p v-if="prodotto != {}">
        Nome: {{ prodotto.nome }}<br />
        Link: <a>{{ prodotto.link }}</a
        ><br />
        Prezzo:
        <b class="text-info"
          >{{ prodotto.prezzo.toFixed(2) }}{{ prodotto.valuta }}</b
        >
      </p>
      <p v-else class="alert alert-danger">Errore</p>
    </div>
  </div>
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
.modal {
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 20px;
  z-index: 1200;
}
.wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: o;
}
</style>
