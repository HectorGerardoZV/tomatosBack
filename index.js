const express = require("express");
const { get } = require("express/lib/response");
const app = express();

get("/", (req, res) => {
res.send("Hola, te conectaste :D!");
} );

app.listen(1000, () => {
console.log("Servidor corriendo en el puerto 1000. " );
});

