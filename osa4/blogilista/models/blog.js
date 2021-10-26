require('dotenv').config()
const config = require('../utils/config')
const logger = require('../utils/logger')
const mongoose = require('mongoose')

const url = config.MONGODB_URI

mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB')
  })  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

module.exports = mongoose.model('Blog', blogSchema)