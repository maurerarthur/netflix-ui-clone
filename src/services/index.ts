import axios from 'axios'

const URL: string = 'http://www.omdbapi.com'
const TOKEN: string = '5c08063e'

const api = axios.create({
  baseURL: `${URL}/?apiKey=${TOKEN}&`
})

export default api