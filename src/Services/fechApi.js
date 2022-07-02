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
