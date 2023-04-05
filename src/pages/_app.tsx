import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Seo } from 'components/Seo'
import { theme } from 'theme'
import { Analytics } from 'components/Analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Seo />
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
