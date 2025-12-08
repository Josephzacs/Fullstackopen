import { useState, useEffect } from 'react'
import AddPerson from './components/addPerson'
import FiltroBusqueda from './components/filtroBusqueda'
import ShowPerson from './components/showPerson'
import axios from 'axios'
import agendaService from './services/agenda'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  
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


  return (
    <div>
      <h2>Phonebook</h2>
      <FiltroBusqueda filtro={filter} manejarFiltro={handleFilterChange} />
      
      <h2>Add a new</h2>
      <AddPerson persons={persons} setPersons={setPersons} />

      <ShowPerson persons={persons} filter={filter} />
    </div>
  )
}

export default App
