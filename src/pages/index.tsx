import { Inter } from '@next/font/google'

import { sanityClient } from 'sanityClient'
import { PostList } from 'components/PostList'
import { Post } from 'sanity-studio/queries/allPostsQuery'
import { Layout } from 'components/Layout'
import { Hero } from 'components/Hero'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  console.log('posts', posts)
  return (
    <Layout>
      <Hero />
      <PostList data={posts} />
    </Layout>
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
