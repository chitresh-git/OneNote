var jwt=require("jsonwebtoken")
const jwt_secret = "cm_code"

const fetchuser=(req,res,next)=>{
// GET THE USER from the jwt token and add id to the req object

    const token=req.header('auth-token') // "auth-token is the name of header in thunderclient "

    if(!token){
        res.status(400).send({error:"please authenticate using a valid token"})
    }
 
    try {
        const data =jwt.verify(token,jwt_secret) // verifying the jwt token using the jwt_secret which is a secret key
        req.user=data.user;      // this will fetch the user details 
        next()
        
    } catch (error) {
        res.status(400).send({error:"please authenticate using a valid token"})

    }

}

module.exports=fetchuser;
