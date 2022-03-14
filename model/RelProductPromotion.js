const sequelize = require("sequelize");
const db = require("../config/DBConnection");

const RelProductPromotion = db.define("relProductPromotion",{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    packageProductId: {
        type: sequelize.INTEGER,
        allowNull:false
    },
    promotionId:{
        type: sequelize.INTEGER,
        allowNull:false
    }
});



module.exports = RelProductPromotion;