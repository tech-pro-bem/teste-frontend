import axios from "axios";

const fetchImg = (url, headers) => {
  const options = {
    method: "GET",
    url: url,
    headers: headers,
    responseType: "blob",
  };

  return axios
    .request(options)
    .then(function (response) {
      let imgUrl = URL.createObjectURL(response.data);
      return imgUrl;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default function fetchPet(pet, width, height) {
  let url = "";
  let headers = {};

  if (pet === "dog") {
    // API doesn't work with different resolutions
    url = "https://placedog.p.rapidapi.com/300/200";
    headers = {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "placedog.p.rapidapi.com",
    };
  }

  if (pet === "cat") {
    const randomNumber = Math.floor(Math.random() * 16 + 1);
    url = `https://placekitten.com/${width}/${height}?image=${randomNumber}`;
  }

  return fetchImg(url, headers);
}
