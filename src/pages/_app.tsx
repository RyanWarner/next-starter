import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styles/global'
import theme from 'styles/theme'
import { DefaultSeo } from 'next-seo'

function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title='next-starter'
        titleTemplate='%s | next-starter'
        description='NextJS, TypeScript, Styled Components and more!'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://next-starter.dev/',
          site_name: 'next-starter',
          images: [
            {
              url: 'https://next-starter.dev/og-image.png',
              width: 800,
              height: 600,
              alt: 'Og Image Placeholder'
            }
          ]
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
