import { useState} from 'react'
import agendaService from '../services/agenda'

const AddPerson = ({persons , setPersons,setMessage,setType}) => {
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
        if (persons.find(person => person.name === newName )) {
            window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)
            agendaService.update(persons.find(person => person.name === newName ).id, {name: newName, number: newNumber})
                .then(updatedPerson => {
                    setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
                    setNewName('')
                    setNewNumber('')
                })
            setMessage(`Updated ${newName}'s number`)
            setType('success')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
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
        setMessage(`Added ${newName}`)
        setType('success')
        setTimeout(() => {
            setMessage(null)
        }, 5000)
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
