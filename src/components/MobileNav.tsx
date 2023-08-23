import { Flex, IconButton, FlexProps } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props extends FlexProps {
  isOpen: boolean
  onToggle: () => void
}

export const MobileNav = ({ isOpen, onToggle, ...rest }: Props) => {
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
        variant='ghost'
        aria-label='Toggle Navigation'
        color='text.100'
      />
    </Flex>
  )
}
