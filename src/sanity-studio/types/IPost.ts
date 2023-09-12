import { TypedObject } from '@sanity/types'

export interface IPost {
  _id: string
  slug: {
    current: string
  }
  publishedAt: string
  title: string
  body: TypedObject[]
  author: {
    _id: string
    _ref: string
    _type: string
    slug: {
      current: string
      _type: any
    }
    name: string
    image: {
      url: string
    }
    bio: TypedObject[]
    instagram: string
    twitter: string
  }
}
