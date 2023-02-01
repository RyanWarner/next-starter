import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Seo } from 'components/Seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Seo />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
