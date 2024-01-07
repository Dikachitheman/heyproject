const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const User = require('./models/user.js')

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

// console.log(process.env.MONGO_URL)


app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => {
    const {name, email, password, username} = req.body

    // User.create({
    //     name,
    //     email,
    //     password,
    //     username,
    // })

    res.json({name, email, password, username})
})

app.listen(4000)