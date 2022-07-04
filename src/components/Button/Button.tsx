import Loading from '../Loading/Loading';
import { ButtonCss } from './style';

type Props = {
  title: string;
  loading: boolean;
  onClick: () => void;
};

function Button({ title, onClick, loading }: Props) {
  return (
    <ButtonCss onClick={onClick}>
      {loading && <Loading />}
      {title}
    </ButtonCss>
  );
}

export default Button;
