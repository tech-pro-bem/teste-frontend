import React from 'react';
import { Button } from '../Button';

interface Props {
  title: string;
  handle: () => void;
  image: string;
}

export function Card({ title, handle, image }: Props) {
  return (
    <div>
      <Button title={title} handle={handle} />

      {image ? (
        <img src={`${image}`} alt={`animalzinho do conteudo ${title}`} />
      ) : null}
    </div>
  );
}
