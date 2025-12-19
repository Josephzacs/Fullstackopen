import { useState,useEffect } from "react"
import countriesServices from "./services/countries"
import ShowCountries from "./components/showCountries"

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [newCountries, setNewCountries] = useState([])
  const [listCountries, setListCountries] = useState([])
  

 

  const manejarPais = (event) => {
   
    console.log(event.target.value)
    setSearchCountry(event.target.value)
 
    
  }

  const buscarPais = (event) => {
    event.preventDefault()
    const paisesFiltrados = listCountries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
    setNewCountries(paisesFiltrados)
  }

  const buscarUnicoPais = (name) => {
    countriesServices.
    getUnique(name).
    then(data => {
      const paisUnico = data
      console.log('Pais unico obtenido:', paisUnico)
      setNewCountries([paisUnico])
    })
  }
  
 
  useEffect(()=>{
    countriesServices
    .getAll()
    .then(initialCountries => {
      setListCountries(initialCountries)
    })
  }, [])

 

  return (
    <div>
      <form onChange={buscarPais} ><span>
        Find countries <input value ={searchCountry} onChange={manejarPais}/>
      </span>
      </form>
      <div>
      <ShowCountries newCountries={newCountries}  buscarUnicoPais={buscarUnicoPais} />
      </div>
    </div>
  )

}

export default App
