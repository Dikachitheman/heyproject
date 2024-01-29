const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader')

require('dotenv').config()

const User = require('./models/user.js')
const Posts = require('./models/Posts.js')

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static('./uploads'))

// console.log(app.use('/uploads', express.static(__dirname + '\\uploads')))

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
const jwtSecret = "kjnkjbkb"

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', async (req, res) => {
    const {name, email, password, username} = req.body

    try {
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
            username,
        })
        res.json(userDoc)
    } catch (e) {
        res.status(422).json(e)
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                if (err) {
                    console.log('wtf')
                } else {
                    res.cookie('token', token).json(userDoc)
                }
            } )
            // res.cookie('token', '').json(userDoc)
        }
        else {
            res.status(422).json('pass not ok')
        }
    }
    else {
        res.json('not found')
    }
})

app.get('/posts', async (req, res) => {

    const post = await Posts.find({}) 

    res.json(post)
})

app.post('/posts', async (req, res) => {

    const { username, time, caption, comments, likes, imageURL} = req.body


    // https://miro.medium.com/v2/resize:fit:828/format:webp/0*caMUvI_Yndd5w3S5
    
    let newName = Date.now() + '.jpg'

    await imageDownloader.image({
        url: imageURL,
        dest: __dirname + "\\uploads\\" + newName
    })

    // res.json(postAdd)

    res.json("\\uploads\\" + newName)

    const postAdd = await Posts.create({
        username,
        time,
        caption,
        comments,
        likes,
        imageURL: newName
     })
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err
            res.json(user)
        })
    } else {
        res.json(null)
    }
    // res.json({token})
})

app.listen(4000)