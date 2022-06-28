import { Card } from "../Card"
import {StyledContainer} from "./styles"

function Container(){
    return (
        <StyledContainer>
            <Card type="dog"/>
            <Card type="cat"/>
        </StyledContainer>
    )
}

export {Container}