import { ButtonStyle } from "./style";

interface ButtonProps {
  name: 'cat' | 'dog';
  onClick: (event: { currentTarget: { name: string } }) => Promise<void>;
}

export function Button({ name, onClick }: ButtonProps) {
  return (
    <ButtonStyle
      type="button"
      name={name}
      onClick={onClick}
    >
      { name === "cat" ? "Gerar Gatinho" : "Gerar Cachorrinho" }
    </ButtonStyle>
  )
}
