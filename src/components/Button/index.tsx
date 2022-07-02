import { StyledButton } from './styles';

interface Props {
  title: string;
  handle: () => void;
}

export function Button({ handle, title }: Props) {
  return (
    <StyledButton type={'button'} onClick={handle}>
      {title}
    </StyledButton>
  );
}
