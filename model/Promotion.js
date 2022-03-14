const sequelize  = require("sequelize");
const db = require("../config/DBConnection");

const Promotion = db.define("promotion",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        unique:true
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    price:{
        type: sequelize.FLOAT(100,2),
        allowNull:false
    },
    description:{
        type: sequelize.TEXT,
        allowNull:false
    },
    time:{
        type: sequelize.DATE,
        allowNull:false,
        defaultValue: Date.now()
    }
});

//Model
const PackageProduct = require("./PackageProduct");
const RelProductPromotion = require("./RelProductPromotion");
Promotion.belongsToMany(PackageProduct,{
    through: RelProductPromotion
})



module.exports = Promotion;