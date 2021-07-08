import { ReactElement } from 'react'
import StickersList from 'components/StickersList'
import StickerForm from 'components/StickerForm'

import * as S from './styles'

const PageHome = (): ReactElement => {
  return (
    <S.PageHomeComponent>
      <h1>next-starter</h1>
      <StickersList />
      <StickerForm />
    </S.PageHomeComponent>
  )
}

export default PageHome
