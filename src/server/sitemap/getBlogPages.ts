import { sanityClient } from 'sanityClient'
import { ISitemapUrl } from './ISitemapUrl'

export const getBlogPages = async (): Promise<ISitemapUrl[]> => {
  const postSlugs: string[] = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current) && publishedAt < now()][].slug.current`
  )

  const paths = postSlugs.map((slug) => {
    return {
      url: `/blog/${slug}`,
      priority: '0.5',
      lastmod: '2023-02-20T23:00:12.880Z'
    }
  })

  return paths
}
