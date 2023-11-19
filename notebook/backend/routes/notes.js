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
    body('title', 'enter a valid title of atleast 3 chararcters').isLength({ min: 2 }), // conditions for validations of user personal information
    body('description', 'enter a description of atleast 10 characters ').isLength({ min: 5 }),

], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // if the filled data doesnt satisfies the validation conditions then this will return the error
        }

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




// ROUTE-3 : using the put method to update the notes : http://localhost:3000/api/notes/updatenote
router.put("/updatenote/:id", fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;// performing the destructuring of the data entered by the client 

        // creatinng a newNote object;
        const newNote = {}

        if (title) { newNote.title = title }   // updating the new data into the note object
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        let note = await notes.findById(req.params.id); // fetching the note from the data base using note id 

        if (!note) { res.status(400).send("note not found ") } // note not found for the user 

        if (note.user.toString() != req.user.id) { // checking wether the fetched note is going to update by the correct user or not 
            return res.status(402).send("this note does not belongs intended user")
        }

        updatedNote = await notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true }) // saving the updated note into the database 

        res.send(updatedNote);// sending the updated note back to the client 
    } catch (error) {
        console.error(error)
        res.status(300).send("some error had occured")
    }


})





// ROUTE-4 : using the put method to update the notes : http://localhost:3000/api/notes/deletenote
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;// performing the destructuring of the data entered by the client 

        // creatinng a newNote object;
        const newNote = {}


        let note = await notes.findById(req.params.id); // fetching the note from the data base using note id 
        if (!note) { res.status(400).send("note not found ") } // note not found for the user 

        if (note.user.toString() != req.user.id) { // checking whether the fetched note is going to update by the correct user or not 
            return res.status(402).send("this note does not belongs intended user")
        }

        deletedNote = await notes.findByIdAndDelete(req.params.id) // this will return deleted note 

        res.json({"note":" has bees successfully deleted",note:deletedNote});// sending the deleted note back to the client 
    } catch (error) {
        console.error(error)
        res.status(300).send("some error had occured")
    }


})


module.exports = router;