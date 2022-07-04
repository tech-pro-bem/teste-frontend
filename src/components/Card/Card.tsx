import Button from '../Button/Button';
import { CardCss } from './style';

type Props = {
  url: string;
  title: string;
  loading: boolean;
  getFunction: () => void;
};

const Card = ({ url, getFunction, loading, title }: Props) => {
  return (
    <CardCss>
      <img src={url} alt='Animal' />
      <div>
        <Button title={title} onClick={getFunction} loading={loading} />
      </div>
    </CardCss>
  );
};

export default Card;
