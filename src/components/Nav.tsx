import { Container, Image, Flex, Button } from '@chakra-ui/react'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { NavItems } from './NavItems'

export const Nav = () => {
  return (
    <Flex
      position='fixed'
      bg='rgba(29, 31, 44, 0.87)'
      backdropFilter='blur(10px)'
      w='100%'
      // h={16}
      zIndex={10}
    >
      <Container
        maxW='5xl'
        display='flex'
        justifyContent='space-between'
        w='100%'
        alignItems='center'
      >
        <Image src='/logo.svg' alt='Company Name' />
        <DesktopNav display={{ base: 'none', lg: 'flex' }} />
        <MobileNav display={{ base: 'flex', lg: 'none' }} />
      </Container>
    </Flex>
  )
}
