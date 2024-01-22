const mongoose = require('mongoose')
const {Schema} = mongoose

const PostSchema = new Schema ({
    username: String,
    time: String,
    caption: String,
    comments: String,
    likes: String,
    imageURL: String
}) 

const PostModel = mongoose.model('Posts', PostSchema)

module.exports = PostModel

