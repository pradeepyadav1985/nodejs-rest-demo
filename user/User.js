// const mongoose = require('mongoose'); 
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});

// module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);