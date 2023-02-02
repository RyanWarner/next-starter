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

export const MobileNav = ({ isOpen, onToggle, ...rest }) => {
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
    </Flex>
  )
}
