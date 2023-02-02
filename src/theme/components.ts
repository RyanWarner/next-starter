import { ThemeComponents } from '@chakra-ui/react'

export const components: ThemeComponents = {
  Button: {
    variants: {
      baseStyle: {
        background: 'green.100',
        fontSize: 'lg' // Normally, it is "semibold"
      },
      primary: {
        color: 'slate.100',
        background: 'green.100'
      },
      ghost: {
        _hover: {
          background: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  },
  Heading: {
    baseStyle: {}
  }
}
