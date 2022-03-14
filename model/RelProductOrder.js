const sequelize = require("sequelize");
const db = require("../config/DBConnection");


const RelProductOrder = db.define("relProductOrder",{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    productPackageId: {
        type: sequelize.INTEGER,
        allowNull:false
    },
    orderId:{
        type:sequelize.INTEGER,
        allowNull:false
    }
});


module.exports = RelProductOrder;