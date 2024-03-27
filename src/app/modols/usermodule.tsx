import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide a First name"],
    unique: true,
  },
  lastname: {
    type: String,
    required: [true, "Please provide a Last name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isvirefd: {
    type: Boolean,
    default: false,
  },
  isAdmain: {
    type: Boolean,
    default: false,
  },
  forgotpasswardtoken: String,
  forgotpasswardtokenexpiry: Date,
  virifeytokien: String,
  virifeytokienexpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
