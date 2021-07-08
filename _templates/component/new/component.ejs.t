---
to: src/components/<%= name %>/index.tsx
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
