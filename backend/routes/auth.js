const express=require("express")

const router=express.Router();
const {body,validationResult}=require("express-validator")

const User=require("../models/user")

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
      
      user= await User.create({ // saving the data inside the data base 
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user)).catch(err=>console.log(err));
      
      // res.json(user)
      
    }catch(err){

      console.error(err)
      res.status(300).send("some error had occured")
    }


//creating a user a post "/api/auth"
// const customer=User(req.body) // fetching the data of the user from the site using post method 
// customer.save() // saving the data in the database
})


module.exports=router;