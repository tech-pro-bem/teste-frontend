import axios from "axios";

const api = Object.freeze({
    dog: "https://dog.ceo/api/breeds/image/random",
    cat: "https://cataas.com/cat?json=true"
})

export const dogHttpRequest = axios.create({
    baseURL: api.dog,
    timeout: 4000
});

export const catHttpRequest = axios.create({
    baseURL: api.cat,
    timeout: 4000
});