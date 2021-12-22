<template>
  <div id="prodotto">
    <div v-on:click="mostraPopup()">
      {{ prodotto.nome }} ({{ prodotto.sito }})
    </div>
    <div style="justify-self: end">
      {{ prodotto.prezzo.toFixed(2) }}{{ prodotto.valuta }}
    </div>
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
    <div id="popup" v-show="popup">
      <h2>Dettagli prodotto</h2>
      <hr />
      <p>
        Nome: {{ prodotto.nome }}<br />
        Link: <a>{{ prodotto.link }}</a
        ><br />
        Prezzo:
        <b class="text-info"
          >{{ prodotto.prezzo.toFixed(2) }}{{ prodotto.valuta }}</b
        >
      </p>
    </div>
  </div>
</template>

<script>
/*function convertToJSON(object) {
  let text = "{";
  for (let key in object) {
    text += '"' + key + '": "' + object[key] + '",';
  }
  text += "}";
  return text;
}*/

export default {
  name: "Prodotto",
  props: {
    prodotto: Object,
    default: () => ({}),
  },
  data() {
    return { isPreferito: this.prodotto.preferito, popup: false };
  },
  methods: {
    cambiaIcona: function () {
      this.isPreferito = !this.isPreferito;
      this.prodotto.preferito = !this.prodotto.preferito;
    },
    mostraPopup: function () {
      //popup = !popup;
      //let json = '{"prodotto": ' + convertToJSON(this.prodotto) + "}";

      var params = JSON.stringify({ prodotto: this.prodotto });
      console.log(params);
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log("Connessione riuscita");
        }
      };
      xhttp.open("POST", "http://192.168.125.183:1234/cronologia", true);
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.send(params);
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
#popup {
  position: absolute;
  width: 50%;
  margin-top: 25%;
  margin-left: 25%;
  background: white;
}
</style>
