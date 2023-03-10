import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { Layout } from 'components/Layout'
import { allPostSlugsQuery } from 'sanity-studio/queries/allPostsQuery'
import { IPost } from 'sanity-studio/types/IPost'
import { sanityClient } from 'sanityClient'
import { postQuery } from 'sanity-studio/queries/postQuery'

interface Props {
  post: IPost
}

const Post: NextPage<Props> = ({ post }) => {
  console.log('post', post)
  return (
    <Layout>
      <Heading>{post.title}</Heading>
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs: string[] = await sanityClient.fetch(
    allPostSlugsQuery
  )

  const paths = allSlugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const post = await sanityClient.fetch(postQuery, { slug })

  return {
    props: {
      post
    }
  }
}
