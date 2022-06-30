import { ButtonCss } from './style';

type Props = {
  title: string;
};

function Button({ title }: Props) {
  return <ButtonCss>{title}</ButtonCss>;
}

export default Button;
