import axios from 'axios';
//TMDB API
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  }
})


//Flask API
const chatApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})
export { chatApi };
export default api;