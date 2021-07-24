const express = require('express')
const morgan = require('morgan')

morgan.token('res-body', (req, res) => res.resBody)

const app = express()
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :res-body'))



let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dab Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }   
]

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people<br/><br/>${new Date()}`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}  

app.post('/api/persons', (req, res) => {
    //add person to phonebook and generate a random id for them
    const person = req.body
    //console.log(person)

    if(person.name === undefined || person.number === undefined){
        res.status(400).json({
            error: 'person is missing name or phonenumber'
        })
    }

    if(persons.map(person => person.name).includes(person.name)){
        //if person is already in the phonebook
        res.status(400).json({
            error: 'the phonebook already contains this name'
        })
    }

    const id = getRandomInt(1, 10000)
    //console.log(`Generated a random id for added person: ${id}`)
    person.id = id
    //console.log(person)
    
    persons = persons.concat(person)
    res.resBody = JSON.stringify(person)
    res.json(person)
})
  
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})