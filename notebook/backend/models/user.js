const mongoose = require("mongoose")
// creating the scheam for users information
const {Schema}=mongoose;
const UserSchema = new Schema({

    name: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true,
        unique:true
    },
    password: {
        type:String,
        require: true
    },
    Date: {
        type:Date,
        default:Date.now

    },
})

const User=mongoose.model("User",UserSchema);
// User.createIndexes(); // this will create the indexes of the items which are going to be saved inside the database , and hence prevent the duplicate data from saving
module.exports=User;
// module.exports=mongoose.model("User",UserSchema);