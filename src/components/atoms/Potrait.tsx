import { PropsWithChildren, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Icons from "./Icons";

type Props = PropsWithChildren<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > & { src?: string }
>;

const Container = styled.div`
    width: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    aspect-ratio: 14 / 16;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(45, 116, 255, 0.5);
    }
`;

const Potrait = ({ onLoad, ...props }: Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [props.src]);

    return (
        <Container>
            <img
                {...props}
                onLoad={(e) => {
                    onLoad?.(e);
                    setLoading(false);
                }}
            />
            {loading ? (
                <div className="loading">
                    <Icons icon="loading" />
                </div>
            ) : null}
        </Container>
    );
};

export default Potrait;
