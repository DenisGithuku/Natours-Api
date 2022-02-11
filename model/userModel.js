const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty'],
  },
  email: {
    type: String,
    required: [true, 'Email cannot be empty'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
});

module.exports = User = mongoose.model('User', userSchema);
