import axios, { AxiosRequestHeaders } from 'axios';

type Props = {
  url: string;
  headers?: AxiosRequestHeaders;
  hasHeaders?: boolean;
};

const defaultHeaders = {
  'X-RapidAPI-Key': '1260544b09msha7459acc2879213p1a2469jsn7ebff83f1de9',
  'X-RapidAPI-Host': 'placedog.p.rapidapi.com',
};

export const featchData = async ({
  url,
  hasHeaders = false,
  headers = {},
}: Props) => {
  const response = await axios.get(url, {
    method: 'GET',
    responseType: 'blob',
    headers: hasHeaders ? defaultHeaders : headers,
  });

  return URL.createObjectURL(response.data);
};
