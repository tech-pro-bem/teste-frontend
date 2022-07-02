import { getCat, getDog } from "./requests"

export const getDogPic = async() => {
    try {
        return await getDog()
    } catch (error) {
        return error
    }
}

export const getCatPic = async() => {
    try {
        return await getCat()
    } catch (error) {
        return error
    }
}