import axios from 'axios'

const api = axios.create({
  baseURL: 'https://de9b357d6a0b.ngrok.io',
})

export default api;
