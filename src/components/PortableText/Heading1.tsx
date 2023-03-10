import { Heading } from '@chakra-ui/react'
import { PortableTextBlockComponent } from '@portabletext/react'

export const Heading1: PortableTextBlockComponent = ({
  children
}) => {
  return <Heading as='h1'>{children}</Heading>
}
