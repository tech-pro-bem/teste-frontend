import axios from "axios"

const dogApi = axios.create({
    baseURL: "http://localhost:3001"
})

export {dogApi}