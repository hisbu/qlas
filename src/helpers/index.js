const dotenv = require('dotenv');
const env = dotenv.config().parsed;
// export const API_URL = 'http://localhost:2017'
// export const API_URL = 'https://api-qelas.purwadhikax.com'

// export const API_URL = 'https://qlas-api.herokuapp.com'
let dbhost = process.env.REACT_APP_NQ_API_HOST
let dbport = process.env.REACT_APP_NQ_API_PORT
console.log(dbhost)
console.log(dbport)
console.log(process.env)
// export const API_URL = `http://${dbhost}:${dbport}`
// export const API_URL = 'http://52.230.68.33:30012'
export const API_URL = "http://service-backend:2017"