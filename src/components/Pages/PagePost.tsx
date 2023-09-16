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
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { IPost } from 'sanity-studio/types/IPost'

dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
interface Props {
  post: IPost
}

export const PagePost = ({ post }: Props) => {
  console.log(post)
  const url = `/posts/${post?.slug.current}`
  const date = dayjs(post?.publishedAt).format('llll')
  const twitterLink = `https://www.x.com/${post.author.twitter}`
  const handle = `@${post.author.twitter}`
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
          Published on {date}
        </Text>
        <Flex alignItems='center' mb={10}>
          <Image
            src={post.author.image.url}
            alt=''
            w={10}
            h={10}
            bg='bg.200'
            borderRadius='50%'
            me={2}
          />
          <Flex flexDir='column'>
            <Text fontSize='sm'>{post.author.name}</Text>
            <Link fontSize='sm' href={twitterLink}>
              {handle}
            </Link>
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
