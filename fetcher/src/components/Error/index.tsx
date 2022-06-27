import { Error } from './styles';
import { Section } from '../styles';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <Section aria-label="error">
      <Error>{message}</Error>
    </Section>
  );
}
