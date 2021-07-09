import { ReactElement } from 'react'

import * as S from './styles'

const Container = ({ children, maxWidth }: any): ReactElement => {
  return (
    <S.ContainerComponent maxWidth={maxWidth}>{children}</S.ContainerComponent>
  )
}

export default Container
