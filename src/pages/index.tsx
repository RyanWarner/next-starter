import { sanityClient } from 'sanityClient'
import { IPost } from 'sanity-studio/types/IPost'
import { allPostsQuery } from 'sanity-studio/queries/allPostsQuery'
import { PageHome } from 'components/Pages/PageHome'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  return <PageHome posts={posts} />
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return {
    props: {
      posts
    }
  }
}
