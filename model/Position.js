const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const Position = db.define("position",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    type:{
        type: sequelize.STRING(50),
        unique: true
    }
});

//Model
const User = require("./User");
Position.hasMany(User,{
    foreignKey:"position"
})

module.exports = Position;