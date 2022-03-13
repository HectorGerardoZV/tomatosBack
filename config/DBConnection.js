const Sequelize = require("sequelize");

const db = new Sequelize("tomatos_pizza","postgres","admin",{
    host: "127.0.0.1",
    dialect: "postgres",
    port: "5432",
    operatorsAliases: false,
    define:{
        timestamps:false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;