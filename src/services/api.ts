import axios from 'axios';
import { random } from '../helpers/random';

export async function fetchCats() {
  const { data } = await axios.get(`https://placekitten.com/300/300?image=${random().catNumber}`, {
    responseType: 'blob',
  });
  const animal = URL.createObjectURL(data);
  return animal;
}

export async function fetchDogs() {
  const { data } = await axios.get(`https://dogs8.p.rapidapi.com/300/300`, {
    responseType: 'blob',
    headers: {
      'X-RapidAPI-Key': '749a385d47msh47f366b5229a25dp1d8c2djsn0581af0d7c8e',
      'X-RapidAPI-Host': 'dogs8.p.rapidapi.com'
    }
  });
  const animal = URL.createObjectURL(data);
  return animal;
}