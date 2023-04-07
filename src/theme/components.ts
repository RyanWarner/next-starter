import { ThemeComponents } from '@chakra-ui/react'

export const components: ThemeComponents = {
  Button: {
    variants: {
      baseStyle: {
        background: 'brandPrimary.100',
        fontSize: 'lg' // Normally, it is "semibold"
      },
      primary: {
        color: 'bg.100',
        background: 'brandPrimary.100',
        _hover: {
          background: 'brandPrimary.200'
        },
        _active: {
          background: 'brandPrimary.100'
        }
      },
      ghost: {
        _hover: {
          background: 'rgba(255, 255, 255, 0.1)'
        },
        _active: {
          background: 'rgba(255, 255, 255, 0.2)'
        }
      }
    }
  },
  Heading: {
    baseStyle: {}
  }
}
