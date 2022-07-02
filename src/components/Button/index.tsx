interface Props {
  title: string;
  handle: () => void;
}

export function Button({ handle, title }: Props) {
  return (
    <button type={'button'} onClick={handle}>
      {title}
    </button>
  );
}
