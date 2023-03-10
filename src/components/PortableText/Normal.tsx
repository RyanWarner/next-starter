import { Text } from '@chakra-ui/react'
import { PortableTextBlockComponent } from '@portabletext/react'

export const Normal: PortableTextBlockComponent = ({ children }) => {
  return (
    <Text mb={8} lineHeight='180%' fontSize='lg' maxW='3xl'>
      {children}
    </Text>
  )
}
