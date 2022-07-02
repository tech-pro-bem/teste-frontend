import { getCat, getDog } from "./requests"

export const getDogPic = async() => {
    try {
        const { data } = await getDog()
        const url = data.message
        return url
    } catch (error) {
        return error
    }
}

export const getCatPic = async() => {
    try {
        const { data } = await getCat()
        const url = `https://cataas.com${data.url}`
        return url
    } catch (error) {
        return error
    }
}