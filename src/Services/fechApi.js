import axios from "axios";
import { randomCatGenerator } from "../utils/randomCatGenerator";

export const getCats = async () => {
  let numCats = randomCatGenerator(100, 500);
  const response = await axios
    .get(`http://placekitten.com/g/${numCats}/${numCats}`, {
      responseType: "blob",
    })
    .then((response) => {
      const img = URL.createObjectURL(response.data);
      return img;
    });

  return response;
};

export const getDogs = async () => {
  const response = await axios
    .get("https://placedog.p.rapidapi.com/300/200", {
      responseType: "blob",
      headers: {
        "X-RapidAPI-Key": "d351acab07mshf2a7d5634f9c235p103268jsnae0600f3d237",
        "X-RapidAPI-Host": "placedog.p.rapidapi.com",
      },
    })
    .then((response) => {
      const image = URL.createObjectURL(response.data);
      return image;
    });
  return response;
};
