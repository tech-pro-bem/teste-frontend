import { Button, Section } from './styles';

type Props = {
  src: string;
  label: string;
  loading: boolean;
  onClick: () => void;
};

export function Generator({ src, onClick, loading, label }: Props) {
  const ariaLabel = label.replace(/\s/g, '-');

  return (
    <Section aria-label={ariaLabel}>
      <img src={src} alt={label} />
      <Button onClick={onClick} type="button" disabled={loading}>
        {label}
      </Button>
    </Section>
  );
}
