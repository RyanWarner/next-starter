import {
  Flex,
  Container,
  Heading,
  ListItem,
  Text,
  Button
} from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Flex bg='slate.200' w='100%' justifyContent='center' py={20}>
      <Container maxW='5xl'>
        <Flex w='100%' justifyContent='space-between'>
          <Flex flexDirection='column'>
            <Heading as='h1' maxW='xl' fontSize='3rem'>
              A strong starting point for content driven websites.
            </Heading>
            <Button mt={8} alignSelf='flex-start' variant='primary'>
              Get started
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
