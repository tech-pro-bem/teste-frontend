import axios from "axios";

export const fetchCat = () => {
  let randomNumber = Math.floor(Math.random() * 16 + 1);

  return axios
    .request({
      method: "GET",
      url: `http://placekitten.com/200/300?image=${randomNumber}`,
      responseType: "blob",
    })
    .then(function (response) {
      let url = URL.createObjectURL(response.data);
      return url;
    })
    .catch(function (error) {
      console.error(error);
    });
};
