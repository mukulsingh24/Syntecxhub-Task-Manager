require('dotenv').config({ path: './mong.env' });
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
const UserRoutes = require('../backend/routes/authRoutes')

const app = express();
app.use(cors())
app.use('/',UserRoutes)
app.use(express.json())
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database Connected Successfully')
})
.catch((error)=>{
    console.log('Error Connecting Database:', error);
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})



