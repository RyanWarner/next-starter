import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import NextImage from 'next/image'

interface Props extends AspectRatioProps {
  src: string
  width?: number
  height?: number
  ratio: number
  alt: string
}

export const Image = ({
  src,
  height = 675,
  width = 1200,
  ratio = 16 / 9,
  alt,
  ...rest
}: Props) => {
  return (
    <AspectRatio ratio={ratio} {...rest}>
      <NextImage
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </AspectRatio>
  )
}
