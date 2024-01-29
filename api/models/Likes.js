// User Schema
// const userSchema = {
//     _id: ObjectId,
//     username: String,
//     email: String,
//     password: String,
//     profilePhoto: String,
//     followers: [ObjectId], // Array of user IDs who are followers
//     following: [ObjectId], // Array of user IDs who are being followed
//     // Other user-related fields
//   };
  
//   // Post Schema
//   const postSchema = {
//     _id: ObjectId,
//     userId: ObjectId,
//     caption: String,
//     imageUrl: String,
//     likes: [ObjectId],
//     comments: [
//       {
//         userId: ObjectId,
//         text: String,
//       },
//       // Other comment-related fields
//     ],
//     // Other post-related fields
//   };
  
  // Like Schema
  const likeSchema = {
    _id: ObjectId,
    postId: ObjectId,
    userId: ObjectId,
    username: String,
    userProfilePhoto: String,
    // Other like-related fields
  };
  
  // Follower Schema
  const followerSchema = {
    _id: ObjectId,
    followerId: ObjectId, // ID of the follower user
    userId: ObjectId, // ID of the user being followed
    // Other follower-related fields
  };
  
  // Following Schema
  const followingSchema = {
    _id: ObjectId,
    userId: ObjectId, // ID of the user following
    followingId: ObjectId, // ID of the user being followed
    // Other following-related fields
  };
  