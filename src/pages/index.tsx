import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Container, Heading } from '@chakra-ui/react'

import { sanityClient } from 'sanityClient'
import { PostList } from 'components/PostList'
import { Post } from 'sanity-queries/allPostsQuery'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  console.log('posts', posts)
  return (
    <main>
      <Container>
        <Heading>next-starter</Heading>
        <PostList data={posts} />
      </Container>
    </main>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`)
  return {
    props: {
      posts
    }
  }
}
