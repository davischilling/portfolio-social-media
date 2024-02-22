import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  picturePath: {
    type: String,
    default: ""
  },
  friends: {
    type: Array,
    default: []
  },
  location: String,
  occupation: String,
  ViewedProfile: Number,
  Impressions: Number,
}, { timestamps: true });

export default mongoose.model("User", userSchema);