const connectTomongo=require("./db");

connectTomongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // this is the middle ware for using req.body in auth.js

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/login', (req, res) => {
//   res.send('Hello login page!')
// })

app.use("/api/auth",require("./routes/auth")) // this wil fetch the data from the auth.js of routes folder

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})