import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
  name: String,
  //   required: true
  // },
  // displayName: {
  //   type: String,
  //   required: true,
  //   minlength: 3,
  // },
  // postSong: {
  //   type: String,
  //   required: true,
  //   maxlength: 20,
  // },
  // postVideo: {
  //   type: String,
  //   required: true,
  // },
  // postLikes: {
  //   type: Number,
  //   required: true,
  // },
  // postComments: {
  //   type: Number,
  //   required: true,
  // },
  // postShares: {
  //   type: Number,
  //   required: true,
  // },
  // userImage: {
  //   type: String,
  //   required: true,
  // },
});

export default mongoose.Schema("feed", feedSchema);
