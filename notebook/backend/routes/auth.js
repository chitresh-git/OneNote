const express = require("express")

const router = express.Router();
const { body, validationResult } = require("express-validator") // this is use to validate users information 
const User = require("../models/user")
const bcryptjs = require("bcryptjs") // this package helps to generate password hash and add salt feature to it 
const jwt = require("jsonwebtoken") // this package generates the json web token for our users
const jwt_secret = "cm_code" // this a secret key which helps us to verify json web token 
var fetchuser=require("../middleware/fetchuser")



// _____________________________________________________________________________________________________________
// ROUTE-1
// creating end point which is used when user login in our website 
  //  this post endpoint is accessed as "/api/auth/login"

  router.post("/login", [ 
    body('email', 'enter a valid email ').isEmail(),
    body("password", "password can not be blank").exists(), // check if passsword is not remain blank
    
  ], async (req, res) => {
    
    
    let flag
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ flag:false, errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
    }

    const { email, password } = req.body; // fetching the emial and password from the site (entered by user)

    try {
      const user = await User.findOne({ email }) // checking if email exist in the database or not 

      if (!user) { // if email doesnot exist then return with error
        return res.status(400).json({ flag:false,error: "you have entered wrong email" })
      }

      const passwordCompare = await bcryptjs.compare(password, user.password); // checking wether the entered password is correct or not by comparing the entered password with hash password stored in our database

      if (!passwordCompare) { // if password is incorrect then return with error 
        return res.status(400).json({ flag,error: "you have entered wrong password" })
      }
      
      // if user exist and also the password is correct then we will generate the jwt token 
      const data = {
        user: {
          id: user.id
        }
      }
      
      const authtoken = jwt.sign(data, jwt_secret) // this will generate jwt token which contains data and our secret key 
      
      
      const name=user.name
      const date=user.Date
      
      res.json({ flag:true,authtoken,name,email,date,password}) // sending the token back to the client 
      
    } catch (err) {
      console.error(err)
      res.status(300).send("some error had occured")
    }
    
  } )
  
  // _________________________________________________________________________________________________________
  
  // ROUTE-2 
  //creating a post ENDPOINT "/api/auth/createuser"        -login is not required here 
   // this end point is used when we create new user
  router.post("/createuser", [
    body('name', 'enter a valid name').isLength({ min: 3 }), // conditions for validations of user personal information
    body('email', 'enter a valid email ').isEmail(),
    body("password", "password length must be more than 5 characters ").isLength({ min: 5 }),
  
  ], async (req, res) => {
    
    let flag
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ flag:false,errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
    }
  
    try {
  
      // saving only the unique data using email 
      let user = await User.findOne({ email: req.body.email }) // this will return true if email is already exist 
  
      if (user) {
        return res.status(400).json({ flag:false,error: "sorry this email is already exist " }) // if user exist then we will send bad request 
      }
  
      const salt = await bcryptjs.genSalt(10) // this will generate salt for users password
      const scurePass = await bcryptjs.hash(req.body.password, salt) // this will generate hash for the password and add salt to it
  
      user = await User.create({ // saving the data inside the data base 
        name: req.body.name,
        password: scurePass,
        email: req.body.email,
      }).catch(err => console.log(err));
  
      const data = {
        user: {
          id: user.id
        }
      }
  
      const authtoken = jwt.sign(data, jwt_secret) // this will generate jwt token which contains data and our secret key 
  
      const name=user.name
      const date=user.Date
      const email=user.email
      const password=req.body.password
  
      res.json({ flag:true,authtoken,name,email,date,password})// sending the token and other detials back to the client 
     
  
    } catch (err) {
  
      console.error(err)
      res.status(300).send("some error had occured")
    }






  // ______________________________________________________________________________________________________________

  // ROUTE-3
  // this enpoint will fetch the details of user using jwt token
    //  this post endpoint is accessed as "/api/auth/getuser"

  router.post("/getuser",fetchuser, async (req, res) => {

  try {
   let userid=req.user.id; // fetching the user id from our token
    const user=await User.findById(userid).select('-password') // fetching the user details(except password ) using user ID 
    res.send(user);

    
  } catch (err) {
    console.error(err)
    res.status(300).send("some error had occured")
  }

})


    // const customer=User(req.body) // fetching the data of the user from the site using post method 
    // customer.save() // saving the data in the database
  })


  module.exports = router;