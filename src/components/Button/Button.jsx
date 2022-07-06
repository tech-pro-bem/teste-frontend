import React from 'react'
import * as S from './styles'

export default function Button({ children, onClick }) {
  return <S.Button onClick={onClick}>{children}</S.Button>
}
