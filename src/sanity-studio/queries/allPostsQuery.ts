export interface Post {
  _id: string
  slug: {
    current: string
  }
  publishedAt: string
  title: string
  body: string[]
}
