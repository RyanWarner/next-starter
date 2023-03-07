import { GetServerSideProps } from 'next'
import { getBlogPages } from 'server/sitemap/getBlogPages'
import { ISitemapUrl } from 'server/sitemap/ISitemapUrl'
import { staticPages } from 'server/sitemap/staticPages'
import { siteConfig } from 'site.config'

function generateSiteMap(allUrls: ISitemapUrl[]) {
  const baseUrl = siteConfig.url

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `
  return sitemap
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({
  res
}) => {
  // We make an API call to gather the URLs for our site
  const blogPageUrls = await getBlogPages()

  // Only include the blog as part of the sitemap if there's at lease one post.
  const staticPagesCheckBlog = staticPages.filter((page) => {
    if (page.url === '/blog' && blogPageUrls.length <= 0) {
      return false
    }

    return true
  })

  const allUrls = staticPagesCheckBlog.concat(blogPageUrls)

  const deduped = allUrls.filter((c: ISitemapUrl, index: number) => {
    return allUrls.indexOf(c) === index
  })

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(deduped)
  console.log('sitemap', sitemap)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
