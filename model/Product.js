const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const Producto = db.define("product",{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true
    },
    name: {
        type: sequelize.STRING,
        allowNull:true
    },
    basePrice:{
        type: sequelize.FLOAT(100,4),
        allowNull:true
    },
    salePrice: {
        type: sequelize.FLOAT(100,4),
        allowNull:true
    },
    description:{
        type: sequelize.TEXT,
        allowNull:true
    },
    category:{
        type: sequelize.INTEGER,
        allowNull:true
    }
    
});

module.exports = Producto;