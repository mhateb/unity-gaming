import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string
        shades: {
          1: string
        }
      }
      secondary: {
        main: string
        shades: {
          1: string
          2: string
          3: string
        }
      }
      accent01: {
        main: string
        shades: {
          1: string
        }
      }
      accent02: {
        main: string
        shades: {
          1: string
          2: string
        }
      }
      white: {
        main: string
      }
      grey: {
        main: string
      }
      darkGrey: {
        main: string
        shades: {
          1: string
          2: string
        }
      }
      text: {
        active: string
        light: string
        link: string
      }
      others: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        7: string
      }
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
