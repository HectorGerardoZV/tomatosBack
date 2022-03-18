const sequelize = require("sequelize")
const db = require("../config/DBConnection")
const PackageProduct = db.define("packageProduct",{
    
    id: {
       type:sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       unique: true
       
    },
    product:{
        type:sequelize.INTEGER,
        allowNull:false
        
    },

    quantity:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    details: {
        type: sequelize.TEXT,
    },
    total: {
        type: sequelize.FLOAT,
        allowNull: false
    }

})

module.exports = PackageProduct;