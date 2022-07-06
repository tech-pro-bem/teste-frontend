import React from 'react';
import { Button } from '../Button';
import { Content } from './styles';
interface Props {
  title: string;
  handle: () => void;
  image: string;
}

export function Card({ title, handle, image }: Props) {
  return (
    <Content>
      <Button title={title} handle={handle} />

      {image ? (
        <img src={`${image}`} alt={`animalzinho do conteudo ${title}`} />
      ) : null}
    </Content>
  );
}
