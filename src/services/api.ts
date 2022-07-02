import axios from 'axios';
import { random } from '../helpers/random';

export async function fetchCats() {
  const { data } = await axios.get(`http://placekitten.com/${random().width}/${random().height}`, {
    responseType: 'blob',
  });
  const animal = URL.createObjectURL(data);
  return animal;
}

export async function fetchDogs() {
  const { data } = await axios.get(`https://dogs8.p.rapidapi.com/${random().width}/${random().height}`, {
    responseType: 'blob',
    headers: {
      'X-RapidAPI-Key': '749a385d47msh47f366b5229a25dp1d8c2djsn0581af0d7c8e',
      'X-RapidAPI-Host': 'dogs8.p.rapidapi.com'
    }
  });
  const animal = URL.createObjectURL(data);
  return animal;
}