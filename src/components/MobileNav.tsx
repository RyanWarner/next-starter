import {
  Flex,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
  Portal
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavItems } from './NavItems'

export const MobileNav = ({ ...rest }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex flexDir='column' {...rest}>
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? (
            <CloseIcon w={3} h={3} />
          ) : (
            <HamburgerIcon w={5} h={5} />
          )
        }
        variant={'ghost'}
        aria-label={'Toggle Navigation'}
      />
      <Collapse in={isOpen} animateOpacity>
        <Flex flexDir='column' w='100%' zIndex={10}>
          <NavItems />
          <Button variant='secondary'>Log in</Button>
          <Button>Sign up</Button>
        </Flex>
      </Collapse>
    </Flex>
  )
}
