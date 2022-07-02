import { Image } from "./style";
import catDog from '../../assets/cat-dog.jpeg';

interface AnimalProps {
  source: string;
  description: string;
}

export function Animal({ source, description }: AnimalProps) {
  return (
    <Image src={!source ? catDog : source} alt={description} />
  )
}
