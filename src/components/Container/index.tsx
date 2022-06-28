import { Card } from "../Card"
import { Title } from "../Title"
import {StyledContainer} from "./styles"

function Container(){
    return (
        <>
            <Title />
            <StyledContainer>
                <Card type="dog"/>
                <Card type="cat"/>
            </StyledContainer>
        </>
    )
}

export {Container}