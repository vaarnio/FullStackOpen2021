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

app.get('/info', (req, res, next) => {
    Person.countDocuments()
        .then(count => {
            res.send(`Phonebook has info for ${count} people<br/><br/>${new Date()}`)
        })
        .catch(error => next(error))
})

app.get('/api/persons', (req, res, next) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(result => {
            if(result){
                res.json(result)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            if(result){
                res.status(204).end()
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    //add person to phonebook and generate a random id for them
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => {
            console.log(error)
            next(error)
        })
})

app.put('/api/persons/:id', (req, res, next) => {
    body = req.body

    Person.findByIdAndUpdate(req.params.id, body, {new: true})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if(error.name === 'CastError') {
        return res.status(400).send({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({error: error.message})
    }

    next(error)
}

app.use(errorHandler)
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})