const User = require("../model/User");



exports.addNew = async(req,res)=>{
    try {
        const {body} = req;
        const {name,accessKey,password,position} = body;
        const userObj = await User.create({name,accessKey,password,position});
        const user = userObj.dataValues;
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({msg: "Error while creating user"});
    }
}

exports.getAll = async(req,res)=>{
    try {
        const users = await User.findAll({});
        res.status(200).json(users);
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

