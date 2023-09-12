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
    name: string
  }
}
