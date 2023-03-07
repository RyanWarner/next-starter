import { GetServerSideProps } from 'next'

const url =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL

const sitemapUrl = `${url}/sitemap.xml`

function Robots() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({
  res
}) => {
  const deployEnv = process.env.NEXT_PUBLIC_VERCEL_ENV

  const generateDevRobots = () => {
    const robots = `User-agent: *
Disallow: /
`

    return robots
  }

  const generateProdRobots = () => {
    const robots = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`

    return robots
  }

  const generateRobots = () => {
    if (deployEnv === 'production') {
      return generateProdRobots()
    } else {
      return generateDevRobots()
    }
  }

  const robots = generateRobots()

  res.setHeader('Content-Type', 'text/plain')
  // we send the TXT to the browser
  res.write(robots)
  res.end()

  return {
    props: {}
  }
}

export default Robots
