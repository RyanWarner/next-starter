import * as S from './styles'
import { Sticker } from 'components'

const stickers = [
  {
    name: 'Star',
    description: 'A bright and shining object in the sky.'
  }
]

const StickersList = () => {
  return (
    <S.PrettyListComponent>
      {stickers.map(item => <Sticker key={item.name} {...item} />)}
    </S.PrettyListComponent>
  )
}

export default StickersList
