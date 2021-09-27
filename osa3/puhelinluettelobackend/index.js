require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

morgan.token('res-body', (req, res) => res.resBody)

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :res-body'))

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people<br/><br/>${new Date()}`)
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
    //add person to phonebook and generate a random id for them
    const body = req.body
    console.log(body)

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(response => {
        console.log('added ' + person.name + ' number ' + person.number + ' to phonebook')
    })
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    console.log("errorHandler runs")

    if(error.name === 'CastError') {
        return res.status(400).send({error: 'malformatted id'})
    }

    next(error)
}

app.use(errorHandler)
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})