const Position = require("../model/Position");


exports.addNew = async(req,res)=>{
    try {
        const {body} = req;
        const {type} = body;
        const positionObj = await Position.create({type});
        const position = positionObj.dataValues;
        res.status(200).json(position);
        
    } catch (error) {
        
    }
}

exports.getAll = async(req,res)=>{
    try {
        const positions = await Position.findAll({});
        res.status(200).json(positions);
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
        
    } catch (error) {
        
    }
}

