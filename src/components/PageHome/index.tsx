import { ReactElement } from 'react'
import StickersList from 'components/StickersList'

import * as S from './styles'

const PageHome = (): ReactElement => {
  return (
    <S.PageHomeComponent>
      <h1>next-starter</h1>
      <StickersList />
    </S.PageHomeComponent>
  )
}

export default PageHome
