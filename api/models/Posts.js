const mongoose = require('mongoose')
const {Schema} = mongoose

const PostSchema = new Schema ({
    username: String,
    time: Date,
    caption: String,
    comments: String,
    likes: Number,
    imageURL: String
}, { timestamps: true }) 

const PostModel = mongoose.model('Posts', PostSchema)

module.exports = PostModel

