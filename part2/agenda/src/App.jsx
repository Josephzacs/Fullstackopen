import { useState, useEffect } from 'react'
import AddPerson from './components/addPerson'
import FiltroBusqueda from './components/filtroBusqueda'
import ShowPerson from './components/showPerson'
import agendaService from './services/agenda'


const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [message, setMessage] = useState(null)
  const [type, setType] = useState(null)
  

  
  
  const [filter, setFilter] = useState('')


  useEffect(() => {
    agendaService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

 
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const Notificacion = ({ message, type }) => {
    if (message === null) {
      return null
    }
    return (
      console.log(type),
      <div className={type}>
        {message}
      </div>
    )
  }


  return (
    <div>
      
      <h2>Phonebook</h2>
      <Notificacion message={message} type= {type} />
      <FiltroBusqueda filtro={filter} manejarFiltro={handleFilterChange} />
      
      <h2>Add a new</h2>
      <AddPerson persons={persons} setPersons={setPersons} setMessage={setMessage} setType={setType} />

      <ShowPerson persons={persons} filter={filter} setPersons={setPersons} />
    </div>
  )
}

export default App
