import { useState } from 'react'
import AddPerson from './components/addPerson'
import FiltroBusqueda from './components/filtroBusqueda'
import ShowPerson from './components/showPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [filter, setFilter] = useState('')


  



 

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
