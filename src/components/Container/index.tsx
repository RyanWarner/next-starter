import { ReactElement } from 'react'

import * as S from './styles'

interface ContainerProps {
  children?: ReactElement | ReactElement[]
  maxWidth?: string
}

const Container = ({ children, maxWidth }: ContainerProps): ReactElement => {
  return (
    <S.ContainerComponent maxWidth={maxWidth}>{children}</S.ContainerComponent>
  )
}

export default Container
