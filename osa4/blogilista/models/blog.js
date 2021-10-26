require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

module.exports = mongoose.model('Blog', blogSchema)