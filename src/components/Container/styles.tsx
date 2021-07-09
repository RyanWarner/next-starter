import styled from 'styled-components'

interface ContainerProps {
  maxWidth: string
}

const sizes: any = {
  sm: '375px',
  md: '768px',
  lg: '1025px',
  xl: '1200px',
}

export const ContainerComponent = styled.div<ContainerProps>`
  max-width: ${props => (props.maxWidth ? sizes[props.maxWidth] : sizes.md)};
  margin: 0 auto;
`
