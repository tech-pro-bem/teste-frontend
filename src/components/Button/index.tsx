import { ButtonStyle } from "./style";

interface ButtonProps {
  value: "cat" | "dog";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

export function Button({ value, children, onClick }: ButtonProps) {
  return (
    <ButtonStyle
      value={value}
      type="button"
      onClick={onClick}
    >
      { children }
    </ButtonStyle>
  )
}
