const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const Product = db.define("product",{
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

//Model
const PackageProduct = require("./PackageProduct");

Product.hasMany(PackageProduct,{
    foreignKey:"product"
});

module.exports = Product;




