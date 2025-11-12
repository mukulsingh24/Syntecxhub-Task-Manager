const express = require('express')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')

const app = express();
app.use(cors())
const PORT = 5000;
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/myTaskDatabase')
.then(() => console.log("Database Connected Successfully"))
.catch(() => console.log("Error Connecing Database"))

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})


