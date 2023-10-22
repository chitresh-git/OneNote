const express = require("express")
const router = express.Router();
var fetchuser = require("../middleware/fetchuser") // importing the middleware
const notes = require("../models/note"); // using the schema of note
const { body, validationResult } = require("express-validator") // this is use to validate notes information 


// ROUTE-1  : using get method to fetch all the notes : http://localhost:3000/api/notes/fetchallnotes
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    const allNote = await notes.find({ user: req.user.id }) // fetching the notes using user id , we will get the user id from the middle ware fetchuser
    // above expression will return the array of notes

    res.json(allNote);// sending array of all notes to the client 

})

// ROUTE-2 : using the post method to add the notes : http://localhost:3000/api/notes/addnote
router.post("/addnotes", [
    body('title', 'enter a valid title of atleast 3 chararcters').isLength({ min: 3 }), // conditions for validations of user personal information
    body('description', 'enter a description of atleast 10 characters ').isLength({ min: 10 }),

], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
    }

    try {
    const { title, description, tag } = req.body; // destrcutring of all the attributes present in schema 


    const note = new notes({ // creating the notes object 
        title, description, tag, user: req.user.id
    })

    const savedNote = await note.save(); // saving the notes object in the database 

    res.send(savedNote) // sending the saved note to the client
} catch (error) {
    console.error(err)
    res.status(300).send("some error had occured") 
}
})


module.exports = router;