import {
  Container,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { IPost } from 'sanity-studio/types/IPost'

export const PostList = ({ data }: { data: IPost[] }) => {
  return (
    <Container maxW='5xl' py={20}>
      <Heading mb={8}>Recent posts</Heading>
      <List>
        {data.map((post) => {
          const url = `/posts/${post.slug.current}`
          return (
            <ListItem key={post.slug.current} mb={4}>
              <Link href={url}>{post.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
