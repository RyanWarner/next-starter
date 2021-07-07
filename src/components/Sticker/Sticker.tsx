import * as S from './styles'

const Sticker = ({ name, description, imageUrl }) => {
  return (
    <S.StickerComponent>
      <img src={imageUrl} alt={name} />
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.StickerComponent>
  )
}

export default Sticker