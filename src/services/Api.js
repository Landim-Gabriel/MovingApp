import axios from 'axios'

const api = axios.create({
  baseURL: 'https://377e692ee42a.ngrok.io',
})

export default api;
