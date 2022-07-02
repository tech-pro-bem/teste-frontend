import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Button, Potrait } from "@atoms";

type Props = { animal?: "cat" | "dog" };

const animals = {
    cat: { url: "placekitten.com", label: "Gatinho" },
    dog: { url: "place.dog", label: "Cachorrinho" },
};

const generateRandomWidth = () => Math.floor(Math.random() * (300 - 100) + 100);

export const Container = styled.div`
    width: 300px;
    margin: 0 auto;
    display: inline-flex;
    flex-direction: column;
    gap: 1em;
`;

const PetGenerator = ({ animal = "cat" }: PropsWithChildren<Props>) => {
    const [width, setWidth] = useState(generateRandomWidth());
    const heigth = useMemo(() => Math.floor(width / 1.14), [width]);

    const { url, label } = animals[animal];

    const generateRandomPortrait = useCallback(() => {
        const newWidth = generateRandomWidth();
        setWidth(newWidth);
    }, []);

    return (
        <Container>
            <Button onClick={generateRandomPortrait}>{`Gerar ${label}`}</Button>
            <Potrait src={`https://${url}/${heigth}/${width}`} />
        </Container>
    );
};

export default PetGenerator;
