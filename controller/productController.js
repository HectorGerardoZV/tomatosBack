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
        res.status(200).json(product);
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
        const {body} = req;
        const {id} = req.params;
        let {name, basePrice, salePrice, description, category} = body;

        const productUpdated = await Product.update(
            {
                name: name,
                basePrice: basePrice,
                salePrice: salePrice,
                description:description,
                category:category
            },
            {
                where:{
                    id:id
                }
                ,returning:true,
                plain: true
            }
        );
        res.json(productUpdated[1]);
    } catch (error) {
        res.json({msg: "Error while updating this product"});
    }
}

exports.delete = async(req,res)=>{
    try {
        const id = req.params.id;
        
        const deleteProduct = await Product.destroy({ where: { id:id } });

        res.json({msg: "Product deleted. "});
    } catch (error) {
        
    }
}
