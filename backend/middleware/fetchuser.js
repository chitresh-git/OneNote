var jwt=require("jsonwebtoken")
const jwt_secret = "cm_code"

const fetchuser=(req,res,next)=>{
// GET THE USER from the jwt token and add id to the req object

    const token=req.header('auth-token')

    if(!token){
        res.status(400).send({error:"please authenticate using a valid token"})
    }

    
    try {
        const data =jwt.verify(token,jwt_secret)
        req.user=data.user;
        next()
        
    } catch (error) {
        res.status(400).send({error:"please authenticate using a valid token"})

    }




}

module.exports=fetchuser;
