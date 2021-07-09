import Head from 'next/head'
import { ReactElement } from 'react'

interface SeoProps {
  title: string
  description: string
  twitterHandle: string
}

const Seo = ({ title, description, twitterHandle }: SeoProps): ReactElement => {
  const ogImageFullpath: string = `${
    process.env.BASE_URL || 'http://localhost:3000'
  }/og-image.png`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageFullpath} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImageFullpath} />
    </Head>
  )
}

Seo.defaultProps = {
  title: 'next-starter',
  description: 'NextJS, TypeScript, Styled Components and more!',
  twitterHandle: '@RyanWarnerCodes',
}

export default Seo
