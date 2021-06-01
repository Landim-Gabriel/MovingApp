import axios from 'axios'

const api = axios.create({
  baseURL: 'https://e6058d574114.ngrok.io',
})

export default api;
