
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const uploadRoutes = require('./routes/upload')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/upload', uploadRoutes)

const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mernstack'
mongoose.connect(MONGO).then(()=> {
  console.log('Connected to MongoDB')
  app.listen(PORT, ()=> console.log('Server running on', PORT))
}).catch(err=>console.error(err))
