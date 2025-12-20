const ShowClima = ({clima}) => {
    if (!clima) {
        return <div><p>Selecciona un país para ver el clima</p></div>
    }

    
    return (
        <div>
            <h3>{clima.name}, {clima.sys.country}</h3>
            <p> Temperatura {clima.main.temp}°C ({clima.weather[0].description})</p>
            <img 
                src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                alt={clima.weather[0].description}
            />
            <p> Viento: {clima.wind.speed} m/s</p>
            <p> Humedad: {clima.main.humidity}%</p>
            <p> Visibilidad: {(clima.visibility / 1000).toFixed(1)} km</p>
        </div>
    )
}
export default ShowClima;