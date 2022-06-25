import axios from 'axios';

const catFetch = () => {
  const cats = axios.get('https://placekitten.com/g/200/300', {
    responseType: 'blob',
  })
    .then((response) => {
      const image = URL.createObjectURL(response.data);
      return image;
    });
  return cats;
};

const dogFetch = () => {
  const dogs = axios.get('https://placedog.p.rapidapi.com/300/200', {
    responseType: 'blob',
    headers: {
      'X-RapidAPI-Key': '76785a252amsh179bfa8147a379dp1f6983jsnd0c90759f4f6',
      'X-RapidAPI-Host': 'placedog.p.rapidapi.com',
    },
  })
    .then((response) => {
      const image = URL.createObjectURL(response.data);
      return image;
    });
  return dogs;
};

export { catFetch, dogFetch };
