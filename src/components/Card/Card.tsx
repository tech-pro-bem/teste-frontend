import Images from '../../img/1.jpg';
import styled from 'styled-components';
import Button from '../Button/Button';

const CardCss = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const Card = () => {
  return (
    <CardCss>
      <img src={Images} alt='' />
      <div>
        <Button title='Gerar gatinho'/>
      </div>
    </CardCss>
  );
};

export default Card;
