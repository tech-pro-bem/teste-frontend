interface CardProps{
    type: "dog" | "cat"
}

function Card({type}: CardProps){
    return (
        <div>
            <img src="" alt="" />
            <button></button>
        </div>
    )
}

export {Card}