export const siteConfig = {
  url: 'https://www.next-starter.dev',
  brandName: 'Next Starter',
  companyName: 'Ryan Warner LLC',
  description:
    'An opinionated starting point for NextJS projects. Comes with TypeScript, ChakraUI, and SanityCMS out of the box.',
  twitterHandle: '@RyanWarnerCodes'
}

interface NavItem {
  title: string
  url: string
}

export const navItems: NavItem[] = [
  {
    title: 'Blog',
    url: '/blog'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]
