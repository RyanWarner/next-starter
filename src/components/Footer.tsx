import {
  Flex,
  Container,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { navItems, siteConfig } from 'site.config'

export const Footer = () => {
  return (
    <Flex bg='bg.200' justifyContent='center' py={10}>
      <Container maxW='5xl'>
        <Flex w='100%' justifyContent='space-between'>
          <Text>
            © {new Date().getFullYear()} {siteConfig.companyName}
          </Text>
          <List display='flex' gap={8}>
            {navItems.map((item) => {
              return (
                <ListItem key={item.title}>
                  <Link href={item.url}>{item.title}</Link>
                </ListItem>
              )
            })}
          </List>
        </Flex>
      </Container>
    </Flex>
  )
}
