import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
    const request = axios.get(baseUrl + 'api/all')
    return request.then(response => response.data)
}

const getUnique = (name) => {
    console.log('Fetching unique country:', name)
    const request = axios.get(baseUrl + 'api/name/' + name)
    console.log('data fetched for country:', request.then(response => response.data))
    return request.then(response => response.data)
}

export default {getAll, getUnique}