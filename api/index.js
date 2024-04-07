const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader')
const multer = require('multer'); // For handling multipart/form-data

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
    const {emailadr, password} = req.body
    email = emailadr
    const userDoc = await User.findOne({email})
    const username = userDoc.username

    console.log(userDoc)
    console.log("from /login")

    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id, username}, jwtSecret, {}, (err, token) => {
                if (err) {
                    console.log('wtf')
                } else {
                    res.cookie('token', token, { sameSite: 'none', secure: true}).json(userDoc)
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

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err
            res.json(user)
            console.log(user)
            console.log("user from /profile")
        })
    } else {
        res.json(null)
    }
    // res.json({token})
})

app.get('/posts', async (req, res) => {

    const post = await Posts.find({}) 

    res.json(post)
})

app.post('/posts', async (req, res) => {

    const { myId, time, caption, comments, likes, imageURL } = req.body


    // https://miro.medium.com/v2/resize:fit:828/format:webp/0*caMUvI_Yndd5w3S5
    
    let newName = Date.now() + '.jpg'

    await imageDownloader.image({
        url: imageURL,
        dest: __dirname + "\\uploads\\" + newName
    })

    // res.json(postAdd)

    res.json("\\uploads\\" + newName)

    const data = await User.findById(myId)
    console.log(myId)
    console.log("data from /posts")
    console.log(data)
    username = data.username

    const postAdd = await Posts.create({
        username,
        time,
        caption,
        comments,
        likes,
        imageURL: newName
     })

     console.log(username)
})

app.put('/like', async (req, res) => {

    const { postId, usid, liked } = req.body;

    try {
      const post = await Posts.findById(postId);
    
      if (!post) {
        return res.status(404).json({ message: "Post not found." });
      }
    
      if (liked) {
        post.likes.push(usid); // Directly update post.likes
      } else {
        const updatedLikes = post.likes.filter((like) => like !== usid);
        post.likes = updatedLikes;
      }
      
      console.log(post.likes)
      console.log(liked)
      await post.save(); // Save the updated post
    
      const updatedPost = await Posts.findById(postId).select('-_id likes'); // Get updated post with only "likes" field
    
      res.json({ likesCount: updatedPost.likes.length, updatedPost }); // Send response with updated data
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
    
})

// const { ObjectId } = require('mongoose'); // Required for type conversion

app.get('/likes/:postid', async (req, res) => {
  try {
    const { postid } = req.params;

    const post = await Posts.findById(postid).select('likes');

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    const userIds = post.likes.map(id => mongoose.Types.ObjectId(id)); // Convert to ObjectIds
    console.log(userIds)
    console.log("////")
    // Fetch user data in one query (optimization)
    const users = await Users.find({ _id: { $in: userIds } })
      .select('username displayImageUrl');

    const likedUsers = users.map(user => ({
      username: user.username,
      displayImageUrl: user.displayImageUrl,
    }));

    res.json(likedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Configure Multer for image uploads (adjust storage options as needed)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify a directory to store uploaded images (optional)
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const upload = multer({ storage: storage }).array('image'); // Use 'array' for multiple files

app.post('/upload', upload, async (req, res) => {
try {
    const imagePaths = []; // Array to store image paths or data URLs

    // Extract image paths/data URLs from the request (adjust based on your setup)
    if (req.files) {
    for (const file of req.files) {
        imagePaths.push(file.path); // If storing images locally
        // Alternatively, if storing data URLs:
        // imagePaths.push(req.body.image); // Assuming data URL is in the request body
    }
    }
    console.log("xoxo")
    console.log(imagePaths)

//   const newImage = new Posts({
//     imageURL: imagePaths,
//     // Add other post data here (e.g., caption, date)
//   });

//   await newImage.save();
    res.json({ message: 'Images uploaded successfully!' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading images.' });
}
});

app.listen(4000)