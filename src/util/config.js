import axios from 'axios'


let basePath = '/api/admin'
var instance = axios.create({
  baseURL: basePath,
  timeout: 5000
})

export default instance;
