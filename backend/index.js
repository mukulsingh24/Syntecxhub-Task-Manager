require('dotenv').config({ path: './mong.env' });
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
const UserRoutes = require('./routes/authRoutes');
const TaskRoutes = require("./routes/taskRoutes")
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api/auth',UserRoutes)
app.use('/api/tasks',TaskRoutes)
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



