import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;    
    justify-content: center;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #8257e5;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #6430db;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: #333;
        color: #fff;
    }
`;

export const  ButtonText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    color: white;
`;

export const SvgIcon = styled.svg`
    margin-left: 10px;
    width: 18px;
    height: 18px;
    animation: loading-spinner 1s linear infinite;
    @keyframes loading-spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
