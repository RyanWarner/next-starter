import * as S from './styles'

import Image from 'next/image'

interface StickerProps {
  name: string,
  description: string,
  image: string
}

const Sticker = ({ name, description, image }: StickerProps) => {
  return (
    <S.StickerComponent>
      <Image src={image} alt={name} width='120' height='120' />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.StickerComponent>
  )
}

export default Sticker