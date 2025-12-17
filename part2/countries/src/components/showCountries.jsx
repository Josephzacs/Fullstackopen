const ShowCountries = ({newCountries}) => {
 if (newCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
  else if (newCountries.length === 0) {
    return (
      <div>
        <p>No matches found</p>
        </div>
    )
  }
    else if (newCountries.length <= 10 && newCountries.length > 1) {
    return (
      <div>
        {newCountries.map((country) => (
            <p key={country.name.common}>{country.name.common}</p>
        ))}
      </div>
    )
  } else if (newCountries.length === 1) {
    const country = newCountries[0]
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
            ))} 
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200"/>
      </div>
    )
  } else {
    return (
      <div>
        <p>No matches found</p>
      </div>
    )
  }
}

export default ShowCountries
    