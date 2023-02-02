import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Nav } from './Nav'
// import { Footer } from './Footer'
// import { config } from 'config'

interface Props extends PropsWithChildren {
  hideNav?: boolean
}

export const Layout: React.FC<Props> = ({ children, hideNav }) => {
  return (
    <Flex minH='100vh' flexDir='column'>
      {!hideNav && <Nav />}
      <Box pt='70px' mb='auto' as='main'>
        {children}
      </Box>
      {/* <Footer /> */}
    </Flex>
  )
}
