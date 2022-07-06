import axios from "axios";

export const dogApi = axios.create({
  baseURL: "https://placedog.p.rapidapi.com/300/200"
})