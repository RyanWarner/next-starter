import { ListItem, List, OrderedList, Text } from '@chakra-ui/react'
import {
  PortableTextComponentProps,
  PortableTextListItemComponent,
  ReactPortableTextList
} from '@portabletext/react'
import { FC } from 'react'
import { PortableTextBlock } from 'sanity'

export type Block = FC<PortableTextComponentProps<PortableTextBlock>>

export const bullet: PortableTextListItemComponent = ({
  children
}) => (
  <ListItem
    display='flex'
    alignItems='flex-start'
    marginBottom={4}
    _before={{
      content: "''",
      width: '6px',
      height: '6px',
      backgroundColor: 'primary.100',
      display: 'block',
      margin: '0.75rem 1rem',
      borderRadius: '50%',
      flexShrink: '0'
    }}
  >
    <Text>{children}</Text>
  </ListItem>
)

export const number: PortableTextListItemComponent = ({
  children
}) => (
  <ListItem marginBottom={4} marginLeft='1.5rem'>
    {children}
  </ListItem>
)

export const ListBullet: FC<
  PortableTextComponentProps<ReactPortableTextList>
> = ({ children }) => (
  <List fontSize='lg' lineHeight='155%' marginBottom='2rem'>
    {children}
  </List>
)

export const ListNumber: FC<
  PortableTextComponentProps<ReactPortableTextList>
> = ({ children }) => (
  <OrderedList fontSize='lg' lineHeight='155%' marginBottom='2rem'>
    {children}
  </OrderedList>
)
