import { Box, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

export const NavItems = () => {
  return (
    <Box as='nav'>
      <List display='flex'>
        <ListItem>
          <Link href='/'>About</Link>
        </ListItem>
      </List>
    </Box>
  )
}
