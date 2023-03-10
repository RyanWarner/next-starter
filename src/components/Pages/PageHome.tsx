import { Container, Heading } from '@chakra-ui/react'
import { Hero } from 'components/Hero'
import { Layout } from 'components/Layout'
import { PostList } from 'components/PostList'
import { IPost } from 'sanity-studio/types/IPost'

interface Props {
  posts: IPost[]
}

export const PageHome = ({ posts }: Props) => {
  return (
    <Layout>
      <Hero />
      <Container maxW='5xl'>
        <Heading as='h1'>Recent Posts</Heading>
        <PostList data={posts} />
      </Container>
    </Layout>
  )
}
