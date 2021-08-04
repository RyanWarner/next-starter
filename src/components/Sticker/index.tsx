import { ReactElement } from 'react'
import * as S from './styles'

import Image from 'next/image'

interface StickerProps {
  name: string
  description: string
  src: string
}

const Sticker = ({ name, description, src }: StickerProps): ReactElement => {
  return (
    <S.StickerComponent data-testid='sticker'>
      <Image src={src} alt={name} width='120' height='120' />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.StickerComponent>
  )
}

export default Sticker
