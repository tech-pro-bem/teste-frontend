import axios from "axios";

const options = {
  method: "GET",
  url: "https://placedog.p.rapidapi.com/300/200",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "placedog.p.rapidapi.com",
  },
  responseType: "blob",
};

export const fetchDog = () => {
  return axios
    .request(options)
    .then(function (response) {
      let url = URL.createObjectURL(response.data);
      return url;
    })
    .catch(function (error) {
      console.error(error);
    });
};
