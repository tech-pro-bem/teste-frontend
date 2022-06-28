import axios from "axios"

const dogApi = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://place.dog"
})

export {dogApi}