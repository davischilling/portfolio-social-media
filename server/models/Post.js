import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  location: String,
  description: {
    type: String,
    max: 500
  },
  picturePath: {
    type: String,
    default: ""
  },
  userPicturePath: {
    type: String,
    default: ""
  },
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: []
  }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);