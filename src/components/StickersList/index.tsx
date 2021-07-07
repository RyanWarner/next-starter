import * as S from './styles'
import Sticker from 'components/Sticker'
import star from 'images/star.png'
import heart from 'images/heart.png'

const stickers = [
  {
    image: star.src,
    name: 'Star',
    description: 'A bright and shining object in the sky.'
  },
  {
    image: heart.src,
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
