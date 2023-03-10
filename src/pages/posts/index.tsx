import { NextPage } from 'next'
import { allPostsQuery } from 'sanity-studio/queries/allPostsQuery'
import { IPost } from 'sanity-studio/types/IPost'
import { sanityClient } from 'sanityClient'
import { PagePosts } from 'components/Pages/PagePosts'

interface Props {
  posts: IPost[]
}

const Posts: NextPage<Props> = ({ posts }) => {
  return <PagePosts posts={posts} />
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
