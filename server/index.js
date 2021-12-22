let Express = require("express");
let bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
let cors = require("cors");

let CONNECTION_STRING = "mongodb+srv://g11:$ciE!964Wg@dealsdetechtor.ybwtc.mongodb.net/DealsDeTECHtor?retryWrites=true&w=majority";
let DATABASE = "DealsDeTECHtor";
let database;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'DealsDeTECHtor API',
            version: '1.0.0',
            description:
                'Information about DealsDeTECHtor API',
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'Group11',
                url: 'http://localhost:1234/',
            },
        },
        servers: [
            {
                url: 'http://localhost:1234/',
                description: 'Development server',
            },
        ],
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

let app = Express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

/**
 * @swagger
 * /cronologia:
 *   post:
 *     summary: Puts a product in the visited list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                       _id:
 *                         type: ObjectId
 *                         description: The id of the product
 *                         example: 61a2ae7bb48bb237244bf8a9
 *                       nome:
 *                         type: string
 *                         description: The name of the product
 *                         example: Prodotto1
 *                       prezzo:
 *                         type: float
 *                         description: The price of the product
 *                         example: 5.0
 *                       valuta: 
 *                          type: char
 *                          description: The money symbol
 *                          example: $
 *                       sito:
 *                          type: string
 *                          description: The website of the product
 *                          example: true
 *     responses:
 *       201:
 *         description: successful executed
*/
app.post("/cronologia", (request, response) => {
    let prodotto = request.body["prodotto"];
    //console.log(prodotto);
    database.collection("Cronologia").insertOne(prodotto);
    response.send("OK");
});

/**
 * @swagger
 * /cronologia:
 *   get:
 *     summary: Retrieve the list of past searched products.
 *     description: Retrieve the list of past searched products from the Server.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: ObjectId
 *                         description: The id of the product
 *                         example: 61a2ae7bb48bb237244bf8a9
 *                       nome:
 *                         type: string
 *                         description: The name of the product
 *                         example: Prodotto1
 *                       prezzo:
 *                         type: float
 *                         description: The price of the product
 *                         example: 5.0
 *                       valuta: 
 *                          type: char
 *                          description: The money symbol
 *                          example: $
 *                       sito:
 *                          type: string
 *                          description: The website of the product
 *                          example: true
 */
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

app.get("/isPreferito/:nome", (request, response) => {
    database.collection("Preferiti").findOne({ nome: request.params.nome }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            if (result != null && result != undefined && result != {}) {
                response.send("OK");
            } else {
                response.send("NO");
            }
        }
    });
});