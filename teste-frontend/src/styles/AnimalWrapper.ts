import styled from 'styled-components'

export const AnimalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 3rem;
`

export const Image = styled.img`
    object-fit: cover;
    object-position: center;

    height: 300px;
    width: 300px;

    border-radius: 4px;
`

export const Button = styled.button`
    background: #4EA8DE;
    color: #FFF;

    border: none;
    border-radius: 4px;

    padding: 1rem 2rem;

    margin-top: 1rem;

    width: 300px;
    
    transition: background 0.2s;
    
    cursor: pointer;

    font-size: 1.2rem;
    font-weight: bold;

    &:hover{
        background: #1E6F9F;
    }
`