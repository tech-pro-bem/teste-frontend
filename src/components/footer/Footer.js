import React from 'react'
import { AppFooter, FooterInfo, FooterLink } from './styles'

function Footer() {
  return (
    <AppFooter>
        <FooterInfo>
            Feito por <FooterLink href="https://www.linkedin.com/in/paulasalvado" target="_blank">@PaulaSalvado</FooterLink>
        </FooterInfo>
        <FooterInfo>
            Imagens por <FooterLink href="https://www.freepik.com/author/catalyststuff" target="_blank">@catalyststuff</FooterLink>
        </FooterInfo>
    </AppFooter>
  )
}

export default Footer