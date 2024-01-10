const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
require('dotenv').config()

const User = require('./models/user.js')

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use(express.json())

// mongoose.connect(process.env.MONGO_URL)

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://heybydikachi:heybydikachi@cluster0.lxcuqng.mongodb.net/")
        console.log("database connected: ", connect.connection.host, connect.connection.name)
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }

}

connectDB()

// console.log(process.env.MONGO_URL)
const bcryptSalt = bcrypt.genSaltSync(6)

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', async (req, res) => {
    const {name, email, password, username} = req.body

    const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
        username,
    })

    res.json(userDoc)
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            res.json('pass ok')
        }
        else {
            res.status(422).json('pass not ok')
        }
    }
    else {
        res.json('not found')
    }
})

app.listen(4000)