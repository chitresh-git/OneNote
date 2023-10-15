const mongoose = require("mongoose")
// creating the scheam for users notes

const NoteSchema = new Schema({

title: {
    type: string,
        require: true
},
description: {
    type: string,
        require: true,
            uique: true
},
tag: {
    type: string,
        require: true
},
Date: {
    type: Date,
        default: Date.now

},
})

module.exports = mongoose.model("note", NoteSchema);