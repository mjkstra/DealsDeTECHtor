let Express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let MongoClient = require("mongodb").MongoClient;

let CONNECTION_STRING = "mongodb+srv://connstring";

let DATABASE = "nomeDB";
let database;

let app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(49146, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log("Error connecting to MongoDB: " + error);
        } else {
            database = client.db(DATABASE);
            console.log("Successfully connected to MongoDB.");
        }
    })
});

app.get("/", (request, response) => {
    response.send("Hello world!");
})