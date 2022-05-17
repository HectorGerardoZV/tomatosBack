const User = require("../model/User");
const jwt = require("jsonwebtoken");
exports.loginUser = async(req,res)=>{
    try {
        const {body} = req;
        const {accessKey, password}= body;
        const user = await User.findOne({
            where:{
                accessKey,
                password
            }
        });
        if(!user){
            return res.status(404).json({msg: "This user doesn't exist"});
        }
        const newUser = {
            name: user.name,
            accessKey: user.accessKey,
            position: user.position
        }
        const token = jwt.sign(newUser,"LLAVE123",{
            expiresIn: "2d"
        })
        res.status(200).json({token});
       
    } catch (error) {
        res.status(500).json({msg: "Error while login user"});
    }
}
exports.verifyUser = (req, res)=>{
    try {
        let token = "";
        const {authorization} = req.headers;
        token  = authorization.split(" ")[1];
        const decode = jwt.verify(token, "LLAVE123");
        if(!decode){
            return res.status(401).json({access: false});
        }
        res.status(200).json(decode);
    } catch (error) {
        res.status(200).json({false: true});
    }
}
