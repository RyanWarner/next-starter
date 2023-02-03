import { Flex, Button } from '@chakra-ui/react'
import { NavItems } from './NavItems'

export const DesktopNav = ({ ...rest }) => {
  return (
    <Flex alignItems='center' {...rest}>
      <NavItems />
      <Button variant='secondary' ms={4} me={4}>
        Log in
      </Button>
      <Button variant='primary'>Sign up</Button>
    </Flex>
  )
}
