import { fetchImageData } from './fetchImageData';

export async function getDogImageURL() {
  const apiURL = `https://placedog.p.rapidapi.com/300/200`;
  const apiHost = 'placedog.p.rapidapi.com';

  const data = await fetchImageData(apiURL, apiHost);

  const url = URL.createObjectURL(data);
  return url;
}