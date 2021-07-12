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
        title="Next Starter"
        titleTemplate="%s | Next Starter"
        description="A description for this new site you've created."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
