<template>

  <div id="prodotto">

    <div v-on:click="mostraPopup()" style="cursor:pointer;text-decoration:underline;">
      {{ prodotto.nome }} ({{ prodotto.sito }})
    </div>

    <div style="justify-self: end">
      {{ prodotto.prezzo.toFixed(2) }}{{ prodotto.valuta }}
    </div>

    <b-icon
      v-if="isPreferito == true"
      icon="star-fill"
      style="font-size: 24px; justify-self: end"
      v-on:click="cambiaIcona()" />
    <b-icon
      id="icona"
      v-else
      icon="star"
      style="font-size: 24px; justify-self: end"
      v-on:click="cambiaIcona()" />
    
    <div id="popup" v-show="popup">
      <div style="display:grid; grid-template-columns: 80% 20%;">
        <h2>Dettagli prodotto</h2>
        <b-icon
        icon="x-circle-fill"
        style="font-size: 4vh; justify-self: end;cursor:pointer;"
        v-on:click="closePopup()"/>
      </div>
      <hr />
      <p>
        Nome: {{ prodotto.nome }}<br />
        Link: <a style="cursor:pointer;text-decoration:underline;">{{ prodotto.link }}</a
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
export default {
  name: "Prodotto",

  props: {
    prodotto: Object,
    usable : Boolean,
    default: () => ({}),
  },

  data() {
    let xhttp = new XMLHttpRequest();
    let preferito;

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        if (xhttp.responseText == "OK") {
          preferito = true;
        } else {
          preferito = false;
        }
      }
    };

    let url = "http://localhost:1234/isPreferito/" + this.prodotto.nome;
    //console.log(url);
    xhttp.open("GET", url, false);
    xhttp.send();
    return { isPreferito: preferito, popup: false };
  },

  methods: {
    cambiaIcona: function () {
      this.isPreferito = !this.isPreferito;

      if (this.isPreferito) {
        let params = JSON.stringify({ prodotto: this.prodotto });
        //console.log(params);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log("Connessione riuscita");
          }

        };

        xhttp.open("POST", "http://localhost:1234/preferiti", true);
        xhttp.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );
        xhttp.send(params);

      } else {

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log("Cancellazione riuscita");
          }
        };
        let url = "http://localhost:1234/preferiti/" + this.prodotto.nome;
        //console.log(url);
        xhttp.open("DELETE", url, true);
        xhttp.send();

      }
      this.prodotto.preferito = !this.prodotto.preferito;
    },
    
    closePopup : function (){
      this.popup = false;
    },

    mostraPopup: function () {

      this.popup = !this.popup;
      //let json = '{"prodotto": ' + convertToJSON(this.prodotto) + "}";
      
      const { _id, ...cron_prod } = this.prodotto;
      console.log(_id);

      if(this.usable == true){
        let params = JSON.stringify({ prodotto: cron_prod });
        //console.log(params);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log("Connessione riuscita");
          }
        };
        xhttp.open("POST", "http://localhost:1234/cronologia", true);
        xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhttp.send(params);
      }

    },
  }
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
  width: max-content;
  border: solid 1px black;
  border-radius: 1vh;
  padding: 2vh;
  margin-top: 25%;
  z-index: 1;
  margin-left: 25%;
  background: white;
}
</style>
