const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const Category = db.define("category",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name:{
        type: sequelize.STRING,
        allowNull:true
    }
});

//Model
const Product = require("./Product");

Category.hasMany(Product,{
    foreignKey:"category"
});
module.exports = Category;