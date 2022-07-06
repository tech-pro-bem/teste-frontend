import { Button, Container, Image } from './styled'

export function Content({ text, url, icon, ...rest }) {
  return (
    <Container>
      <Button {...rest}>
        {icon} {text}
      </Button>
      <Image src={url} />
    </Container>
  )
}
