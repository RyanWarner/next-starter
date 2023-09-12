import { groq } from 'next-sanity'

export const postQuery = groq`
*[_type == "post" && defined(slug.current) && slug.current == $slug && publishedAt < now()][0]{
  ...,
  author->{
    ...,
    "image": image.asset->{
      metadata,
      url
    }
  },
}
`
