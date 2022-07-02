import React, { useMemo } from "react";
import icons from "./svg";

export type IconsProps = { size?: number };

const Icons: React.FC<{ icon: keyof typeof icons } & IconsProps> = ({
    icon,
    ...props
}) => {
    const Icon = useMemo(() => icons[icon], []);
    return <Icon {...props} />;
};

export default Icons;
