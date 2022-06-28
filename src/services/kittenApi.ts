import axios from "axios"

const catApi = axios.create({
    baseURL: "http://placekitten.com"
})

export {catApi}