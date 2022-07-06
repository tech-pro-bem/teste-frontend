import axios from "axios";

export const catApi = axios.create({
  baseURL: "http://placekitten.com"
})