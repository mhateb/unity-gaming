import { createTheme } from 'styled-breakpoints'
import { DefaultTheme } from 'styled-components'

const colors = {
  primary: {
    main: 'rgb(108, 93, 211)',
    shades: {
      1: 'rgba(207, 200, 255)',
      2: 'rgba(207, 200, 255, 0.5)',
    },
    opacity: {
      1: 'rgb(108, 93, 211, 0.05)',
      2: 'rgb(108, 93, 211, 0.1)',
      3: 'rgb(108, 93, 211, 0.5)',
      4: 'rgb(108, 93, 211, 0.75)',
    },
  },
  secondary: {
    main: 'rgb(0, 73, 198)',
    shades: {
      1: 'rgb(160, 215, 231)',
      2: 'rgb(63, 140, 255)',
      3: 'rgb(0, 38, 133)',
    },
  },
  accent01: {
    main: 'rgb(255, 162, 192)',
    shades: {
      1: 'rgb(255, 183, 245)',
      2: 'rgb(255, 183, 245, 0.5)',
    },
    opacity: {
      1: 'rgb(255, 162, 192, 0.5)',
    },
  },
  accent02: {
    main: 'rgb(255, 206, 115)',
    shades: {
      1: 'rgb(255, 117, 76)',
      2: 'rgb(255, 154, 123)',
    },
  },
  white: {
    main: 'rgb(255, 255, 255)',
    opacity: {
      1: 'rgb(255, 255, 255, 0.05)',
      2: 'rgb(255, 255, 255, 0.1)',
      3: 'rgb(255, 255, 255, 0.2)',
      4: 'rgb(255, 255, 255, 0.4)',
      5: 'rgb(255, 255, 255, 0.6)',
      6: 'rgb(255, 255, 255, 0.7)',
      7: 'rgb(255, 255, 255, 0.8)',
    },
  },
  darkGrey: {
    main: 'rgb(27, 29, 33)',
    shades: {
      1: 'rgb(128, 129, 145)',
      2: 'rgba(240, 243, 246, 0.1)',
    },
    opacity: {
      1: 'rgb(27, 29, 33, 0.2)',
      2: 'rgb(27, 29, 33, 0.5)',
      3: 'rgb(27, 29, 33, 0.7)',
    },
  },
}

const breakpoints = createTheme({
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
})

const theme: DefaultTheme = {
  colors,
  ...breakpoints,
}

export default theme
