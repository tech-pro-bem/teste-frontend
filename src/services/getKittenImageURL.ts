import { generateRandomNumberFromOneToNine } from '../utils/generateRandomNumberFromOneToNine';
import { fetchImageData } from './fetchImageData';

export async function getKittenImageURL() {
  const randomImageDimensionValue = generateRandomNumberFromOneToNine();

  const apiURL = `https://community-placekitten.p.rapidapi.com/200/${randomImageDimensionValue}00`;
  const apiHost = 'community-placekitten.p.rapidapi.com';

  const data = await fetchImageData(apiURL, apiHost);

  const url = URL.createObjectURL(data);
  return url;
}