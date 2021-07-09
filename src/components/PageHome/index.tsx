import { ReactElement } from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import StickersList from 'components/StickersList'
import StickerForm from 'components/StickerForm'

import * as S from './styles'

const PageHome = (): ReactElement => {
  return (
    <Layout>
      <S.PageHomeComponent>
        <Container>
          <h1>next-starter</h1>
          <StickersList />
          <StickerForm />
        </Container>
      </S.PageHomeComponent>
    </Layout>
  )
}

export default PageHome
