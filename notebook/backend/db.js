const mongoose = require("mongoose")

const connectTomongo=()=>{

    // mongoose.connect('mongodb://127.0.0.1:27017/newNote')
    mongoose.connect('mongodb+srv://chitreshcm:eN9GrUr4Q0FUYu59@cluster0.rzwbtp1.mongodb.net/newNote', { useNewUrlParser: true, useUnifiedTopology: true });
 
    console.log("connected")
}

module.exports = connectTomongo;
