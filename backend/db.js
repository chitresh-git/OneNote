const mongoose = require("mongoose")

const connectTomongo=()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/newNote')

    console.log("connected")
}


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
module.exports = connectTomongo;
