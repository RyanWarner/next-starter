import { ReactElement } from 'react'

import * as S from './styles'
import Sticker from 'components/Sticker'
import stickersData from './stickersData'

const StickersList = (): ReactElement => {
  return (
    <S.StickersListComponent>
      <h1>Stickers</h1>
      {stickersData.map(item =>
        <Sticker key={item.name} {...item} />
      )}
    </S.StickersListComponent>
  )
}

export default StickersList
