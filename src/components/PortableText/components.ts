import { PortableTextComponents } from '@portabletext/react'
import { Heading2 } from './Heading2'
import { bullet, ListBullet, ListNumber, number } from './Lists'
import { Normal } from './Normal'

export const components: PortableTextComponents = {
  block: {
    normal: Normal,
    h2: Heading2
  },
  list: {
    bullet: ListBullet,
    number: ListNumber
  },
  listItem: {
    bullet,
    number
  }
}
