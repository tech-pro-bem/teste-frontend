import axios from 'axios';

export async function getCatImage(catNumber) {
  const response = await axios.get(
    `http://placekitten.com/200/300?image=${catNumber}`,
    { responseType: 'blob' },
  );
  return URL.createObjectURL(response.data);
}

export async function getDogImage() {
  const response = await axios.get('https://placedog.p.rapidapi.com/300/200', {
    headers: {
      'X-RapidAPI-Key': 'bcd410e343msh4d5772c71f54d4dp1b8663jsna8fba6394842',
      'X-RapidAPI-Host': 'placedog.p.rapidapi.com',
    },
    responseType: 'blob',
  });
  return URL.createObjectURL(response.data);
}
