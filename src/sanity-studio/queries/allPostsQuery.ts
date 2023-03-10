import { groq } from 'next-sanity'

export const allPostsQuery = groq`
*[_type == "post" && defined(slug.current) && publishedAt < now()]{
  title,
  slug,
  publishedAt
}
`

export const allPostSlugsQuery = groq`
*[_type == "post" && defined(slug.current) && publishedAt < now()][].slug.current
`
