import styled from "styled-components";
import Generators from "./components/organisms/Generators";

export const Container = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding-top: 1em;
    h1 {
        color: #2d74ff;
        font-size: 1.5em;
        font-weight: 600;
    }
`;

function App() {
    return (
        <Container>
            <h1>Pet Generator</h1>
            <Generators />
        </Container>
    );
}

export default App;
