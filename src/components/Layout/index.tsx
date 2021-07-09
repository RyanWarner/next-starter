import { ReactElement } from 'react'

import * as S from './styles'

const Layout = ({ children }: any): ReactElement => {
  return (
    <S.LayoutComponent>
      <S.PageContent>{children}</S.PageContent>
    </S.LayoutComponent>
  )
}

export default Layout
