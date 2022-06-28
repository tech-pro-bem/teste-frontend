import { useEffect, useState } from "react"
import { dogApi } from "../../services/dogApi"
import { catApi } from "../../services/kittenApi"

interface CardProps{
    type: "dog" | "cat"
}

function Card({type}: CardProps){
    const [img, setImg] = useState<string>()

    function randomizeImg(){
        const random = Math.random() * (600 - 300) + 300
        const width = Math.round(random)
        const height = width + 100

        console.log(width, height)

        if(type === "dog"){
            dogApi.get(`/${width}/${height}`, {responseType: "blob"})
                .then(response => {
                    const url = URL.createObjectURL(response.data)
                    setImg(url)
                })
        }else{
            catApi.get(`/${width}/${height}`, {responseType: "blob"})
                .then(response => response.data)
                .then(data => {
                    const url = URL.createObjectURL(data)
                    setImg(url)
                })
        }
    }

    useEffect(() => randomizeImg(), [])

    return (
        <div>
            <img width="300" height="400" src={img} alt="" />
            <button>Gerar {type === "dog" ? "Cachorrinho" : "Gatinho"}</button>
        </div>
    )
}

export {Card}