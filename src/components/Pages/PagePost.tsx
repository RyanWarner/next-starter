import {
  Container,
  Flex,
  Text,
  Heading,
  Image
} from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { Layout } from 'components/Layout'
import { Link } from 'components/Link'
import { portableTextComponents } from 'components/PortableText/components'
import { IPost } from 'sanity-studio/types/IPost'

interface Props {
  post: IPost
}

export const PagePost = ({ post }: Props) => {
  console.log(post)
  const url = `/news/${post?.slug.current}`
  return (
    <Layout>
      <Container py={[8, 10, 20]} maxW='2xl' as='article'>
        <Heading as='h1' mb={5}>
          {post.title}
        </Heading>
        <Text
          textTransform='uppercase'
          fontSize='xs'
          letterSpacing='2px'
          mb={5}
          color='text.200'
        >
          Published on August 31, 2023
        </Text>
        <Flex alignItems='center' mb={10}>
          <Image
            src=''
            alt=''
            w={10}
            h={10}
            bg='bg.200'
            borderRadius='50%'
            me={2}
          />
          <Flex flexDir='column'>
            <Text>Author Name</Text>
            <Link href='https://www.threads.net/'>@handle</Link>
          </Flex>
        </Flex>
        <PortableText
          value={post.body}
          components={portableTextComponents}
        />
      </Container>
    </Layout>
  )
}
