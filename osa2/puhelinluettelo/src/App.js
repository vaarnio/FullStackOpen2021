import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    persons.map(person => person.name).includes(newPerson.name)
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons(persons.concat(newPerson))
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const AddNewProps = {
    addPerson,
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddNew {...AddNewProps}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

const Filter = ({filter, handleFilterChange}) => {
  return(
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

const AddNew = (props) => {
  const {addPerson, newName, newNumber, handleNameChange, handleNumberChange} = props
  return(
    <div>
      <form onSubmit={addPerson}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = ({persons, filter}) => {
  const shownPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return(
    <div>
        {shownPersons.map(person => 
          <Person key={person.name} name={person.name} number={person.number}/>
        )}
    </div>
  )
}

const Person = ({name, number}) => {
  return(
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

export default App