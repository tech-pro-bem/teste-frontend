import { TextButton } from "./style"

function Button({children, theme, action}) {
  return (
    <TextButton theme={theme} onClick={action}>
        {children}
    </TextButton>
  )
}

export default Button