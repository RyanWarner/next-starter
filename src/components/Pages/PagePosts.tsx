import { Container, Heading } from '@chakra-ui/react'
import { Layout } from 'components/Layout'
import { PostList } from 'components/PostList'
import { IPost } from 'sanity-studio/types/IPost'

interface Props {
  posts: IPost[]
}

export const PagePosts = ({ posts }: Props) => {
  return (
    <Layout>
      <Container maxW='5xl'>
        <Heading as='h1'>Posts</Heading>
        <PostList data={posts} />
      </Container>
    </Layout>
  )
}
