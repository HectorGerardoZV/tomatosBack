const express = require("express");
const routes = require("./router/routes");
const bodyParser = require("body-parser");
const db = require("./config/DBConnection");
const cors = require("cors");


const app = express();
//Connecting whit the database
db.sync()
    .then(()=>console.log("Connected with the data base"))
    .catch(error=>console.log(error))


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",routes)
app.listen(1000, () => {
console.log("Servidor corriendo en el puerto 1000. " );
});



