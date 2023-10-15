const express=require("express")

const router=express.Router();
const {body,validationResult}=require("express-validator")

const User=require("../models/user")

router.post("/",[
    body('name','enter a valid name').isLength({min:3}), // conditions for validations of user personal information
    body('email','enter a valid email ').isEmail(),
    body("password").isLength({min:5}),

],(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
    }

    User.create({ // saving the data inside the data base 
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user)).catch(err=>console.log(err));


// const a={
//     name:"harsh",
//     email:"harsh@gmail.com",
//     password:"23122"

// }
// res.json(a); // sending the json data
// res.send("hello");n
// console.log(req.body)

//creating a user a post "/api/auth"
// const customer=User(req.body) // fetching the data of the user from the site using post method 
// customer.save() // saving the data in the database
})


module.exports=router;