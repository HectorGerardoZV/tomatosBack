//Model
const Cateogry = require("../model/Category");
exports.addNew = async(req,res)=>{
    try {
        const {body} = req;
        const {name} = body;
        
        const category = await Cateogry.create({name});
        const categoryObject = (category.dataValues);
        res.status(200).json(categoryObject);
    } catch (error) {
        
    }
}

exports.getAll = async(req,res)=>{
    try {
        const categories = await Cateogry.findAll({})
        res.status(200).json(categories);
    } catch (error) {
        
    }
}

exports.getById = async(req,res)=>{
    try {
        
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
        const {id} = req.params;
        await Cateogry.destroy({
            where:{
                id:id
            }
        });
        res.status(200).json({msg: "Deleted"});
    } catch (error) {
        res.status(500).json({msg: "Error while deleting"});
    }
}
