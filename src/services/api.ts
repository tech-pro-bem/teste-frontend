import axios from "axios";

export const getImageDog = async (): Promise<string | undefined> => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breeds/image/random`,
    );
    return response.data.message;

  } catch(e) {
    console.warn(`ERROR: ${e}`);
  }
};

export const getImageCat = async (width: number, height: number): Promise<string | undefined> => {
  try {
    const response = await axios.get(
      `http://placekitten.com/${width}/${height}`,
      { responseType: "blob" }
    );
    return URL.createObjectURL(response.data)

  } catch(e) {
    console.warn(`ERROR: ${e}`);
  }
};
