//Model
const Order = require("../model/Order");
const PackageProduct = require("../model/PackageProduct");
const RelProductOrder = require("../model/RelProductOrder");
exports.addNew = async(req,res)=>{
    try {
        const {orderId,packageIds} = req;
        
        packageIds.forEach(async packageId=>{
            await RelProductOrder.create({
                packageProductId: packageId,
                 orderId: orderId
            });
        });
        res.status(200).json({msg: "Order Added"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error, this product doesn't exist"});
    }
}
exports.getAll = async(req,res)=>{
    try {
        const orders = await Order.findAll({include:{
            model:PackageProduct
        } });
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error while querying all orders"});
    }
}

exports.getByState = async (req,res)=>{
    try {
        const {state} = req.params;
        const orders = await Order.findAll({
            where:{
                state:state
            },
            include:PackageProduct
        });
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error while querying orders"});
    }
}

exports.getById = async(req,res)=>{
    try {
        const {id} = req.params;
        const order = await Order.findOne({
            where:{
                id:id
            }
        });
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
    }
}

exports.update = async(req,res)=>{
    try {
        const {body} = req;
        const {id} = req.params;
        
       
        let {client, description, total, date, state} = body;
        
        await Order.update(
            {
                client: client,
                description: description,
                total: total,
                state:state
            },
            {
                where:{
                    id:id
                }
            }
        );
        res.status(200).json({msg: "Order updated"});
    } catch (error) {
        res.status(500).json({msg: "Error while updating this order"});
    }
}

exports.delete = async(req,res)=>{
    try {
        const {id} = req.params;
        await Order.destroy({
            where:{
                id:id
            }
        });
        res.status(200).json({msg: "Order deleted"});
    } catch (error) {
        console.log(error);
    }
}
