const PackageProduct = require("../../model/PackageProduct");
const Order = require("../../model/Order");

exports.newOrderStep1 = async(req,res,next)=>{
    try {

        const {body} = req;
        const packageProduct= body[1];

        let idsPackages = packageProduct.map( async package=>{
            const {product,quantity,details,total} = package;
            const packageObj = await PackageProduct.create({product,quantity,details,total});
            const id = packageObj.dataValues.id;
            return id;
            
        });
        return Promise.all(idsPackages).then(id=>{
            req.packageIds = id;
            next();
        })
       
    } catch (error) {
        res.json({msg: "Error while adding packages"})
    }
}
exports.newOrderStep2 = async(req,res,next)=>{
    try {
        const {body} = req;
        const [order] = body;
        
        //Order data
        let {user,client, description, total, date, state} = order;
       

        const orderObj = await Order.create({user,client, description, total, date, state});
        let orderId = orderObj.dataValues.id;
        req.orderId = orderId;
        next();
    } catch (error) {
        res.status(500).json({msg: "Errror while creating the order"});
    }
}

