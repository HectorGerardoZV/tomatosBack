//Model
const Order = require("../model/Order");
const PackageProduct = require("../model/PackageProduct");
const RelProductOrder = require("../model/RelProductOrder");

exports.addNew = async(req,res)=>{
    try {
        const {body} = req;
        const [order, packageProduct] = body;

        //Order data
        let {user,client, description, total, date, state} = order;
        date = Date.now();

        const orderObj = await Order.create({user,client, description, total, date, state});
        let orderId = orderObj.dataValues.id;
        packageProduct.forEach(async package=>{
            const {product,quantity} = package;
            const packageObj = await PackageProduct.create({product,quantity});
            const packageId = packageObj.dataValues.id;

            await RelProductOrder.create({
                packageProductId: packageId,
                 orderId: orderId
            });
        });

        res.status(200).json({msg: "Order Added"});
        
    } catch (error) {
        console.log(error);
    }
}

exports.getAll = async(req,res)=>{
    try {
        const orders = await Order.findAll({});
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
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
        const [order, packageProduct] = body;
        let {client, description, total, date, state} = order;
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
