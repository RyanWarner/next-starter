import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface Props extends LinkProps {
  children: ReactNode | ReactNode[]
}

export const Link: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <ChakraLink as={NextLink} {...rest}>
      {children}
    </ChakraLink>
  )
}
