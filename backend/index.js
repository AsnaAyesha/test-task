const express = require('express')
const app = express()
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors())

app.use('/api/user', require('./route/userRoute'))

connectDB()

// port connection
PORT = 8000
app.listen(PORT, () => console.log(`Listening to port number: ${PORT}`))