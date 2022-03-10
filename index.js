const express = require("express");
const routes = require("./router/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",routes)
app.listen(1000, () => {
console.log("Servidor corriendo en el puerto 1000. " );
});



