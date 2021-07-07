import * as S from './styles'

import Image from 'next/image'

const Sticker = ({ name, description, imageUrl }) => {
  return (
    <S.StickerComponent>
      <Image src={imageUrl} alt={name} width='120' height='120' />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.StickerComponent>
  )
}

export default Sticker