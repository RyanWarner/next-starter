import { NextSeo } from 'next-seo'
import { siteConfig } from 'site.config'

interface ISEO {
  title?: string
  description?: string
  ogImage?: string
  favicon?: string
}

export const Seo = ({
  title = siteConfig.brandName,
  description = siteConfig.description,
  ogImage = '/ogimage.jpg',
  favicon = '/favicon.png'
}: ISEO) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.brandName,
            type: 'image/jpeg'
          }
        ]
      }}
      twitter={{
        handle: siteConfig.twitterHandle,
        cardType: 'summary_large_image'
      }}
      additionalMetaTags={[
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: favicon
        }
      ]}
    />
  )
}
