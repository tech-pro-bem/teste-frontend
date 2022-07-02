import { catHttpRequest, dogHttpRequest } from "./httpClient"

export const getDog = () => dogHttpRequest.get()
export const getCat = () => catHttpRequest.get()