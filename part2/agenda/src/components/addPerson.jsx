import { useState} from 'react'
import axios from 'axios'
import agendaService from '../services/agenda'

const AddPerson = ({persons , setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const manejarNombre = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const manejarNumero = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const onAdd = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        if(newName === '' || newNumber === '') {
            alert('Name or Number cannot be empty')
            return
        }
        if (persons.find(person => person.name === newName || person.number === newNumber)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        const personObject = {
            name: newName,
            number: newNumber,
            
        }

        agendaService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
    }


  return (
    <form onSubmit={onAdd}>
      <div>
        name: <input value={newName} onChange={manejarNombre} />
      </div>
      <div>
        number: <input value={newNumber} onChange={manejarNumero} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddPerson
