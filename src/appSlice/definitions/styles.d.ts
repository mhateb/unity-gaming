import 'styled-components'

type ColorObj = {
  main: string
  shades?: {
    [key: number]: string
  }
  opacity?: {
    [key: number]: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: ColorObj
      secondary: ColorObj
      accent01: ColorObj
      accent02: ColorObj
      white: ColorObj
      darkGrey: ColorObj
    }
    'styled-breakpoints': {
      breakpoints: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
