import { Error, Section } from './styles';

export function ErrorMessage({
  message = 'Ops! Somthing went warnig.',
}: {
  message?: string;
}) {
  return (
    <Section aria-label="error" role="alert">
      <Error>{message}</Error>
    </Section>
  );
}
