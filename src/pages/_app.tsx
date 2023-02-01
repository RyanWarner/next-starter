import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Seo } from 'components/Seo'
import { theme } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Seo />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
