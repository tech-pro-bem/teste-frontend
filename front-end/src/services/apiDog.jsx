import axios from "axios";

const apiDog = axios.create({
    baseURL: `https://placedog.net/`,
})

export default apiDog;