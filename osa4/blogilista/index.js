const http = require('http')
const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const app = express()
const blogsRouter = require('./controllers/blogs')
const Blog = require('./models/blog')

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})