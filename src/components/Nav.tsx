import { Container, Image, Flex } from '@chakra-ui/react'
import { NavItems } from './NavItems'

export const Nav = () => {
  return (
    <Flex position='fixed' bg='rgba(0, 0, 0, 0.2)' w='100%'>
      <Container
        maxW='5xl'
        display='flex'
        justifyContent='space-between'
        w='100%'
      >
        <Image src='/logo.svg' alt='Company Name' />
        <NavItems />
      </Container>
    </Flex>
  )
}
