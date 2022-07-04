import axios from "axios";
import randomNumber from "../utils/randomNumber";
import { toast } from 'react-toastify';

const urlCat = () => axios.get(`https://placekitten.com/300/200?image=${randomNumber()}`, {
    responseType: 'blob'
}).then(response => {
    return URL.createObjectURL(response.data);
}).catch(error => {
    toast('LOADING CAT: ' + error.message);
});

const urlDog = () => axios.get('https://placedog.p.rapidapi.com/300/200', {
    headers: {
        'X-RapidAPI-Key': 'd351acab07mshf2a7d5634f9c235p103268jsnae0600f3d237',
        'X-RapidAPI-Host': 'placedog.p.rapidapi.com'
    },
    responseType: 'blob'
}).then(response => {
    return URL.createObjectURL(response.data);
}).catch(error => {
    toast('LOADING DOG: ' + error.message);
});

export { urlCat, urlDog };