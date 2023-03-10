import { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { Layout } from 'components/Layout'
import { PostList } from 'components/PostList'
import { allPostsQuery } from 'sanity-studio/queries/allPostsQuery'
import { IPost } from 'sanity-studio/types/IPost'
import { sanityClient } from 'sanityClient'

interface Props {
  posts: IPost[]
}

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Heading>Posts</Heading>
      <PostList data={posts} />
    </Layout>
  )
}

export default Posts

export async function getStaticProps() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return {
    props: {
      posts
    }
  }
}
