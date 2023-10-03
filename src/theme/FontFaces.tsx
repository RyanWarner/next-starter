import { Global, css } from '@emotion/react'

const fontFaces = css`
  /* @font-face {
    font-family: 'Family';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      url(/fonts/family/Family-Regular.woff) format('woff'),
      url(/fonts/family/Family-Regular.woff2) format('woff2');
  } */
`

export const FontFaces = () => {
  return <Global styles={fontFaces} />
}
