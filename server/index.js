let Express = require("express");
let bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
let cors = require("cors");

let CONNECTION_STRING = "mongodb+srv://g11:$ciE!964Wg@dealsdetechtor.ybwtc.mongodb.net/DealsDeTECHtor?retryWrites=true&w=majority";
let DATABASE = "DealsDeTECHtor";
let database;

let app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(1234, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log("Error connecting to MongoDB: " + error);
        } else {
            database = client.db(DATABASE);
            console.log("MongoDB connection successfull");
        }
    })
});

app.post("/cronologia", (request, response) => {
    let prodotto = request.body["prodotto"];
    //console.log(prodotto);
    database.collection("Cronologia").insertOne(prodotto);
    response.send("OK");
});

app.get("/cronologia", (request, response) => {
    database.collection("Cronologia").find({}).toArray((error, result) => {
        if (error) {
            console.log(error);
        }
        response.send(result);
    })
});


app.get("/preferiti", (request, response) => {
    database.collection("Preferiti").find({}).toArray((error, result) => {
        if (error) {
            console.log(error);
        }
        response.send(result);
    })
});

app.post("/preferiti", (request, response) => {
    let prodotto = request.body["prodotto"];
    //console.log(prodotto);
    database.collection("Preferiti").insertOne(prodotto);
    response.send("OK");
});

app.delete("/preferiti/:nome", (request, response) => {
    database.collection("Preferiti").deleteMany({
        nome: request.params.nome,
    });
    //console.log(request.params.nome);
    response.send("OK");
});
