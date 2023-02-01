import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Post } from 'sanity-queries/allPostsQuery'

export const PostList = ({ data }: { data: Post[] }) => {
  return (
    <Container maxW='2xl'>
      <List>
        {data.map((post) => {
          const url = `/posts/${post.slug.current}`
          return (
            <ListItem key={post.slug.current}>
              <Link href={url}>{post.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
