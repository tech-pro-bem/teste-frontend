import {StyledTitle} from "./styles"
import {FaPaw} from "react-icons/fa"

function Title(){
    return (
        <>
            <StyledTitle>
                <span>Pet Generator&nbsp;</span>
                <FaPaw />
            </StyledTitle>
        </>
    )
}

export {Title}