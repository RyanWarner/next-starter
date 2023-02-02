import {
  Container,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { Post } from 'sanity-studio/queries/allPostsQuery'

export const PostList = ({ data }: { data: Post[] }) => {
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
