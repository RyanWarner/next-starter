import { Box, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { navItems } from 'site.config'

export const NavItems = () => {
  return (
    <Box as='nav'>
      <List
        display='flex'
        gap={8}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        {navItems.map((item) => {
          return (
            <ListItem key={item.title}>
              <Link href={item.url}>{item.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
