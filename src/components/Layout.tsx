import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

interface Props extends PropsWithChildren {
  hideNav?: boolean
}

export const Layout = ({ children, hideNav }: Props) => {
  return (
    <Flex minH='100vh' flexDir='column'>
      {!hideNav && <Nav />}
      <Box pt={16} mb='auto' as='main'>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
