import styled from "styled-components";

export const TextButton = styled.button`
    width: calc(50% - 1rem);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme === "primary" ? "transparent" : "#b4c4cd"};
    color: ${props => props.theme === "primary" ? "#fff" : "#5a656e"};
    background-color: ${props => props.theme === "primary" ? "#0d99ff" : "#fff"};
    transition: background-color 0.15s ease-in;

    &:hover {
        background-color: ${props => props.theme === "primary" ? "#065A97" : "#F0F0F0"};
    }
`