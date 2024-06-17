const connectTomongo = require("./db");
const express = require('express')
var cors = require('cors')

connectTomongo();

const app = express()
const port = 3005

app.use(cors())



app.use(express.json()); // this is the middle ware for using req.body in auth.js



app.use("/api/auth", require("./routes/auth")) // this will fetch the data from the auth.js of routes folder
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})