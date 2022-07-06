import axios from "axios";

const apiCat = axios.create({
    baseURL: `https://placekitten.com/`,
})

export default apiCat;