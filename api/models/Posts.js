const mongoose = require('mongoose')
const {Schema} = mongoose

const PostSchema = new Schema ({
    username: String,
    time: Date,
    caption: String,
    comments: String,
    likes: {
        type: [String],
        default: []
    },
    imageURL: String
}, { timestamps: true }) 

const PostModel = mongoose.model('Posts', PostSchema)

module.exports = PostModel


// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     required: true
//   },
//   likes: {
//     type: [String], // Array of user IDs who liked the post
//     default: []
//   },
//   caption: {
//     type: String,
//     maxLength: 2048 // Optional: Limit caption length
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   comments: {
//     type: [mongoose.Schema.Types.ObjectId],
//     ref: 'Comment', // Reference to the Comment model (optional)
//     default: []
//   }
// });

// module.exports = mongoose.model('Post', postSchema);


// const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//     maxLength: 1024 // Optional: Limit comment length
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true
//   },
//   post: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Post', // Reference to the Post model
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   likes: {
//     type: [String], // Array of user IDs who liked the comment (optional)
//     default: []
//   },
//   replies: {
//     type: [mongoose.Schema.Types.ObjectId], // Array of comment IDs for nested replies (optional)
//     ref: 'Comment', // Reference to itself for nested comments
//     default: []
//   }
// });

// module.exports = mongoose.model('Comment', commentSchema);
