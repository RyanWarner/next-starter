import * as S from './styles'
import { Sticker } from 'components'
import star from 'images/star.png'
import heart from 'images/heart.png'

const stickers = [
  {
    imageUrl: star,
    name: 'Star',
    description: 'A bright and shining object in the sky.'
  },
  {
    imageUrl: heart,
    name: 'Heart',
    description: 'Full of love.'
  }
]

const StickersList = () => {
  return (
    <S.StickersListComponent>
      <h1>Stickers</h1>
      {stickers.map(item => <Sticker key={item.name} {...item} />)}
    </S.StickersListComponent>
  )
}

export default StickersList
