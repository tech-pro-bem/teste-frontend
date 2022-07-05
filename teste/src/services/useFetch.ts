import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';

export function useFetch(url: string, options?: AxiosRequestConfig) {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchingImage(){
    axios
    .get(url, options)
    .then(response => {
      const data = URL.createObjectURL(response.data);
      setImageURL(data);
    })
    .catch(err => setError(err))
    .finally(() => {
      setIsFetching(false);
    });
  }

  return {
    imageURL,
    error,
    fetchingImage,
    isFetching,
  };
}
