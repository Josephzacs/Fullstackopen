import { useState,useEffect, use } from "react"
import countriesServices from "./services/countries"
import ShowCountries from "./components/showCountries"
import climaServices from "./services/clima"
import ShowClima from "./components/showClima"

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [newCountries, setNewCountries] = useState([])
  const [listCountries, setListCountries] = useState([])
  const [clima, setClima] = useState(null)

  

 

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
    }).catch(error => {
      console.error('Error fetching unique country:', error)
    })
  }
  
  useEffect(() => {
    if (newCountries.length === 1) {
      const country = newCountries[0];
      const lat = country.capitalInfo.latlng[0];
      const lon = country.capitalInfo.latlng[1];
  
      climaServices.getClima(lat, lon)
        .then(data => {
          setClima(data);
          console.log('Climate data fetched:', clima);
        })
        .catch(error => {
          console.error('Error fetching climate data:', error);
        });
    }
  }, [newCountries])
 
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
      <ShowCountries newCountries={newCountries}  buscarUnicoPais={buscarUnicoPais}   />
      <ShowClima  clima={clima} />
      </div>
    </div>
  )

}

export default App
