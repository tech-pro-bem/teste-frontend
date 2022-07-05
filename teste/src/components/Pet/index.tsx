import { Icon } from 'assets/Icon';
import { Container } from './style';
import { PetProps } from '@shared/interfaces';

export function Pet({ top, left, right, bottom, rotate, seconds }: PetProps) {
  return (
    <Container
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      rotate={rotate}
      seconds={seconds}
    >
      <Icon />
    </Container>
  );
}
