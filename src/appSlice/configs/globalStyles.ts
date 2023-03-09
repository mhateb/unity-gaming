import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  input {
	box-sizing: border-box;
  }

  p, span, h1, h2, h3, h4, h5, h6 {
	margin: 0px;
  }
`
