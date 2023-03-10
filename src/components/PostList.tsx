import { Link, List, ListItem } from '@chakra-ui/react'
import { IPost } from 'sanity-studio/types/IPost'

export const PostList = ({ data }: { data: IPost[] }) => {
  return (
    <List py={20}>
      {data.map((post) => {
        const url = `/posts/${post.slug.current}`
        return (
          <ListItem key={post.slug.current} mb={4}>
            <Link href={url}>{post.title}</Link>
          </ListItem>
        )
      })}
    </List>
  )
}
