import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetchPet from "../fetchPet";

const Wrapper = styled.div`
  img {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 50px;
  }

  button {
    font-family: "Inkfree";
    font-size: 24px;
    background-color: #b1bce6;
    border: 0;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 4px rgba(0, 0, 0, 0.5);
    padding: 10px 25px;

    &:hover {
      background-color: #c3cfff;
      cursor: pointer;
    }

    &:active {
      background-color: #919abb;
    }
  }
`;

export default function PetGenerator({ pet, text }) {
  const [imgUrl, setImgUrl] = useState();

  const fetch = async () => {
    let url;
    url = await fetchPet(pet);
    setImgUrl(url);
  };

  useEffect(() => {
    fetch().catch(console.error);
  }, []);

  return (
    <Wrapper>
      <img src={imgUrl} alt="Pet" />
      <button onClick={fetch}>{text || "Click"}</button>
    </Wrapper>
  );
}
