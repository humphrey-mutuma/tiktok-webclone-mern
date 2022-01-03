import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
    minlength: 3,
  },
  postSong: {
    type: String,
    required: true,
  },
  postVideo: {
    type: String,
    required: true,
  },
  postLikes: {
    type: Number,
    required: true,
  },
  postComments: {
    type: Number,
    required: true,
  },
  postShares: {
    type: Number,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
});

export default mongoose.model("feed", feedSchema);
