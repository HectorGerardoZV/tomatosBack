//Model
const Product = require("../model/Product");
exports.addNew = async(req,res)=>{
    try {
        const {body} = req;
        const {name,basePrice,salePrice, description, category} = body;
        
        const product = await Product.create(
            {
                name,
                basePrice,
                salePrice, 
                description, 
                category
            }
            );
        console.log(product);
        res.status(200).json({msg: "Product created"});
    } catch (error) {
        
    }
}

exports.getAll = async(req,res)=>{
    try {
        const products = await Product.findAll({})
        res.status(200).json(products);
    } catch (error) {
        
    }
}

exports.getById = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.getByCategory = async(req,res)=>{
    try {
        const {category} = req.params;
        const products = await Product.findAll({
            where:{
                category:category
            }
        })
        res.status(200).json(products);
    } catch (error) {
        
    }
}

exports.update = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.delete = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
