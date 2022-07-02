import React from "react";
import { PetGenerator } from "@molecules";

const Generators: React.FC = () => (
    <>
        <PetGenerator />
        <PetGenerator animal="dog" />
    </>
);

export default Generators;
