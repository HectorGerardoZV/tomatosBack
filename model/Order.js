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
    user:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    client: {
        type: sequelize.STRING(100),
    },
    total:{
        type: sequelize.FLOAT(100,4)
    },
    date: {
        type: sequelize.DATE,
        defaultValue: Date.now()
    },
    state:{
        type: sequelize.STRING,
        defaultValue: "Pending"
    }

});

//Model
const PackageProduct = require("./PackageProduct");
const RelProductOrder = require("./RelProductOrder");

Order.belongsToMany(PackageProduct,{
    through:RelProductOrder,
    onDelete: "cascade",
    hooks:true
})

module.exports = Order;