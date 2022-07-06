import axios from 'axios'

const apiCat = axios.create({
  baseURL: 'http://placekitten.com/',
  responseType: 'blob',
})

const apiDog = axios.create({
  baseURL: 'https://place.dog/',
  responseType: 'blob',
})

export { apiCat, apiDog }
