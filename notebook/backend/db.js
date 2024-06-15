const mongoose = require("mongoose")

const connectTomongo=()=>{

    // mongoose.connect('mongodb://127.0.0.1:27017/newNote')
    // mongoose.connect('mongodb://127.0.0.1:27017/newNote', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connect('mongodb+srv://chitreshcm:eN9GrUr4Q0FUYu59@cluster0.rzwbtp1.mongodb.net/newNote', { useNewUrlParser: true, useUnifiedTopology: true });
 
    // mongoose.connect('mongodb://0.tcp.in.ngrok.io:17657/newNote')

    console.log("connected")
}


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
module.exports = connectTomongo;
