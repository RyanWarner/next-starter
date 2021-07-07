---
to: src/components/<%= name %>/<%= name %>.tsx
---
import * as S from './styles'

const <%= name %> = () => {
  return (
    <S.<%= name %>Component>
      <%= name %>
    </S.<%= name %>Component>
  )
}

export default <%= name %>
