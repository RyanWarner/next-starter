---
to: src/components/<%= name %>/index.tsx
---
import { ReactElement } from 'react'

import * as S from './styles'

const <%= name %> = (): ReactElement => {
  return (
    <S.<%= name %>Component>
      <%= name %>
    </S.<%= name %>Component>
  )
}

export default <%= name %>
