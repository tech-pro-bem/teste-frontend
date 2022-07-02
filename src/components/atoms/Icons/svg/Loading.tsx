import React from "react";
import { IconsProps } from "..";

const Loading: React.FC<IconsProps> = ({ size = 75 }) => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
    >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1"
            />
        </circle>
        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.2"
            />
        </circle>
        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
            />
        </circle>
    </svg>
);

export default Loading;
