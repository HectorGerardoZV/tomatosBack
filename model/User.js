const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const User = db.define("user",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique:true
    },
    name:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    accessKey:{
        type: sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    password:{
        type: sequelize.STRING,
        allowNull: false
    },
    position:{
        type: sequelize.INTEGER,
        allowNull:false
    }
});

//Model
const Order = require("./Order");
User.hasMany(Order,{
    foreignKey:"user"
})

module.exports = User;