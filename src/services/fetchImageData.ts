import axios from 'axios';

export async function fetchImageData(apiURL: string, apiHost: string) {
  const { data } = await axios.get(apiURL, {
    responseType: 'blob',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_API_KEY,
      'X-RapidAPI-Host': apiHost
    }
  })

  return data;
}
