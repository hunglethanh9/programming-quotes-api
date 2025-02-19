const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: /\S+@\S+\.\S+/,
    index: true
  },
  accessToken: {
    type: String,
    unique: true
  },
  voted: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ProgrammingQuote'
    }
  ],
  admin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: Date
})

module.exports = mongoose.model('User', userSchema)
