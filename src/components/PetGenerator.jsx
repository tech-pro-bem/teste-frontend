import React, { useEffect, useState } from "react";
import { fetchDog } from "../api/dog";
import { fetchCat } from "./../api/cat";

export default function PetGenerator({ pet }) {
  const [imgUrl, setImgUrl] = useState();

  const fetch = async () => {
    let url;
    if (pet === "dog") url = await fetchDog();
    if (pet === "cat") url = await fetchCat();
    setImgUrl(url);
  };

  useEffect(() => {
    fetch().catch(console.error);
  }, []);

  return (
    <>
      <div>
        <img src={imgUrl} alt="Pet" />
      </div>
      <button onClick={fetch}>Click</button>
    </>
  );
}
