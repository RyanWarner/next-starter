import { sanityClient } from 'sanityClient'
import { PostList } from 'components/PostList'
import { IPost } from 'sanity-studio/types/IPost'
import { Layout } from 'components/Layout'
import { Hero } from 'components/Hero'
import { allPostsQuery } from 'sanity-studio/queries/allPostsQuery'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <Hero />
      <PostList data={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return {
    props: {
      posts
    }
  }
}
