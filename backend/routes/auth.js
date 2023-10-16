const express=require("express")

const router=express.Router();
const {body,validationResult}=require("express-validator") // this is use to validate users information 
const User=require("../models/user")
const bcryptjs=require("bcryptjs") // this package helps to generate password hash and add salt feature to it 
const jwt=require("jsonwebtoken") // this package generates the json web token for our users
const jwt_secret="cm_code" // this a secret key which helps us to verify json web token 

router.post("/",[
    body('name','enter a valid name').isLength({min:3}), // conditions for validations of user personal information
    body('email','enter a valid email ').isEmail(),
    body("password").isLength({min:5}),

], async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
    }

    try{

      // saving only the unique data using email 
      let user = await User.findOne({email:req.body.email}) // this will return true if email is already exist 
      
      if(user){
        return res.status(400).json({error:"sorry this email is already exist "}) // if user exist then we will send bad request 
      }
      
      const salt=await bcryptjs.genSalt(10) // this will generate salt for users password
      const scurePass=await bcryptjs.hash(req.body.password,salt) // this will generate hash for the password and add salt to it

      user= await User.create({ // saving the data inside the data base 
        name: req.body.name,
        password: scurePass,
        email: req.body.email,
      }).catch(err=>console.log(err));

      const data={
        user:{
          id:user.id
        }
      }

      const authtoken=jwt.sign(data,jwt_secret) // this will generate jwt token which contains data and our secret key 

      
      res.json({authtoken}) // sending the token back to the client 
      
    }catch(err){

      console.error(err)
      res.status(300).send("some error had occured")
    }


//creating a user a post "/api/auth"
// const customer=User(req.body) // fetching the data of the user from the site using post method 
// customer.save() // saving the data in the database
})


module.exports=router;