import { ReactElement } from 'react'

import * as S from './styles'
import Sticker from 'components/Sticker'
import stickersData from './stickersData'

const StickersList = (): ReactElement => {
  return (
    <S.StickersListComponent>
      <h2>Example components</h2>
      <h3>Stickers</h3>
      {stickersData.map(item =>
        <Sticker key={item.name} {...item} />
      )}
    </S.StickersListComponent>
  )
}

export default StickersList
