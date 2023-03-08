import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'sanity-studio/sanity.config'
import { createGlobalStyle } from 'styled-components'
import { Heading } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle(({ theme }: any) => ({
  html: { backgroundColor: theme.sanity.color.base.bg }
}))

export default function StudioPage() {
  if (!config) {
    return <Heading>Error: Sanity config issue.</Heading>
  }
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
      </Head>

      <NextStudio config={config}>
        <StudioProvider config={config}>
          <GlobalStyle />
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  )
}
