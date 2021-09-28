import React, { useEffect, useState } from 'react'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [RefreshPersons, setRefreshPersons] = useState(false);
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isGood, setIsGood] = useState(false)

  useEffect(() => {
    console.log("getAll persons effect has run")
     personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
    })
  }, [RefreshPersons])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(persons.map(person => person.name).includes(newPerson.name)){
      const result = window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)
      const id = persons.find(person => person.name === newPerson.name).id
      //console.log(persons)
      console.log(id)
      if(result){
        personService
        .update(id, newPerson)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setErrorMessage(`Updated ${newPerson.name}`)
          setIsGood(true)
          setRefreshPersons(!RefreshPersons)
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${newPerson.name} has already been removed from the server`
          )
        })
      }
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setErrorMessage(`Added ${newPerson.name}`)
          setIsGood(true)
          setRefreshPersons(!RefreshPersons)
        })
        .catch(error => {
          console.log(error.response.data.error)
          setErrorMessage(error.response.data.error)
          setIsGood(false)
        })
    }
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    console.log('delete button clicked')
    personService.deleteP(id)
    setErrorMessage(`Person deleted succesfully`)
    setIsGood(true)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)

    setRefreshPersons(!RefreshPersons)
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
      <Notification message={errorMessage} isGood={isGood}/>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddNew {...AddNewProps}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

const Notification = ({message, isGood}) => {
  if(message === null){
    return null
  }

  return(
    <div className={isGood ? 'notification-good' : 'notification-bad'}>
      {message}
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

const DeleteId = ({id, deletePerson}) => {
  return(
    <div>
      <button onClick={() => deletePerson(id)}>
        delete
      </button>
    </div>
  )
}

const Persons = ({persons, filter, deletePerson}) => {
  const shownPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return(
    <div>
        {shownPersons.map(person => 
          <Person key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={deletePerson}/>
        )}
    </div>
  )
}

const Person = ({id, name, number, deletePerson}) => {
  return(
    <div style={{display: "flex",}}>
      <p>{name} {number} </p>
      <DeleteId id={id} deletePerson={deletePerson}/>
    </div>
  )
}

export default App