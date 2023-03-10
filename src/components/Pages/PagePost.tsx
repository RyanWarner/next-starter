import { Container, Heading } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { Layout } from 'components/Layout'
import { IPost } from 'sanity-studio/types/IPost'
import { components } from 'theme/components'

interface Props {
  post: IPost
}

export const PagePost = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <Heading as='h1'>{post.title}</Heading>
        <PortableText value={post.body} components={components} />
      </Container>
    </Layout>
  )
}
