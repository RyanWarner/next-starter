import {
  Container,
  Image,
  Flex,
  Button,
  Collapse,
  useDisclosure
} from '@chakra-ui/react'
import { DesktopNav } from './DesktopNav'
import { Link } from './Link'
import { MobileNav } from './MobileNav'
import { NavItems } from './NavItems'

export const Nav = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      position='fixed'
      bg='rgba(29, 31, 44, 0.87)'
      backdropFilter='blur(10px)'
      w='100%'
      zIndex={10}
      flexDir='column'
    >
      <Container
        maxW='5xl'
        display='flex'
        justifyContent='space-between'
        w='100%'
        alignItems='center'
        h={16}
      >
        <Link href='/'>
          <Image src='/logo.svg' alt='Company Name' />
        </Link>
        <DesktopNav display={{ base: 'none', lg: 'flex' }} />
        <MobileNav
          isOpen={isOpen}
          onToggle={onToggle}
          display={{ base: 'flex', lg: 'none' }}
        />
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Container
          maxW='5xl'
          flexDir='column'
          w='100%'
          zIndex={10}
          py={10}
        >
          <NavItems />
          <Flex
            mt={10}
            flexDir='column'
            gap={4}
            alignItems='flex-start'
          >
            <Button variant='secondary'>Log in</Button>
            <Button variant='primary'>Sign up</Button>
          </Flex>
        </Container>
      </Collapse>
    </Flex>
  )
}
