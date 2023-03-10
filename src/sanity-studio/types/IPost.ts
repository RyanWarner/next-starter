export interface IPost {
  _id: string
  slug: {
    current: string
  }
  publishedAt: string
  title: string
  body: string[]
}
