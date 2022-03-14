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
        allowNull:true,
        unique:true
    }
});

//Model
const Product = require("./Product");

Category.hasMany(Product,{
    foreignKey:"category",
    onDelete: "cascade",
    hooks:true
});
module.exports = Category;