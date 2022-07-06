import React, { useMemo } from "react";
import { IconsProps } from "..";

const Loading: React.FC<IconsProps> = ({ size = 75 }) => {
    const refValue = useMemo(() => 100 / size, [size]);
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={Math.floor(size / 1.65)}
            height={size}
            viewBox={`0 0 ${size} ${{ size }}`}
            xmlSpace="preserve"
        >
            <circle
                fill="#fff"
                stroke="none"
                cx={6 / refValue}
                cy={50 / refValue}
                r={6 / refValue}
            >
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 15 ; 0 -15; 0 15"
                    repeatCount="indefinite"
                    begin="0.1"
                />
            </circle>
            <circle
                fill="#fff"
                stroke="none"
                cx={30 / refValue}
                cy={50 / refValue}
                r={6 / refValue}
            >
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 10 ; 0 -10; 0 10"
                    repeatCount="indefinite"
                    begin="0.2"
                />
            </circle>
            <circle
                fill="#fff"
                stroke="none"
                cx={54 / refValue}
                cy={50 / refValue}
                r={6 / refValue}
            >
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
};

export default Loading;
