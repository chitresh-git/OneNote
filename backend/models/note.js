const mongoose = require("mongoose")
const {Schema}=mongoose;
// creating the scheam for users notes

const NoteSchema = new Schema({

    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
    },

title: {
    type: String,
        require: true
},
description: {
    type: String,
        require: true,
            uique: true
},
tag: {
    type: String,
        require: true
},
Date: {
    type: Date,
        default: Date.now

},
})

module.exports = mongoose.model("note", NoteSchema);