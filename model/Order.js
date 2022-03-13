const sequelize = require("sequelize");
const db = require("../config/DBConnection");
const Order = db.define("order",{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    client: {
        type: sequelize.STRING(100),

    },
    description: {
        type: sequelize.TEXT
    },
    total:{
        type: sequelize.FLOAT(100,4)
    },
    date: {
        type: sequelize.DATE
    },
    state:{
        type: sequelize.STRING,
        defaultValue: "Pending"
    }

});

module.exports = Order;