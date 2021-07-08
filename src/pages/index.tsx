import { ReactElement } from 'react'

import Seo from 'components/Seo'
import PageHome from 'components/PageHome'

export default function Home (): ReactElement {
  return (
    <div>
      <Seo />
      <PageHome />
    </div>
  )
}
