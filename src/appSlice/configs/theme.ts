import { createTheme } from 'styled-breakpoints'
import { DefaultTheme } from 'styled-components'

const colors = {
  primary: {
    main: 'rgb(108, 93, 211)',
    shades: {
      1: 'rgba(207, 200, 255)',
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
  },
  grey: {
    main: '#E4E4E4',
  },
  darkGrey: {
    main: 'rgb(27, 29, 33)',
    shades: {
      1: 'rgb(128, 129, 145)',
      2: 'rgba(240, 243, 246, 0.1)',
    },
  },
  text: {
    active: '#11142D',
    light: '#808191',
    link: '#5F75EE',
  },
  background: {
    bg1: '#1F2128',
    bg2: '#242731',
  },
  others: {
    1: '#D1E5FF',
    2: '#00FF62',
    3: '#C600FF',
    4: '#E9DCF9',
    5: '#FAE4B6',
    6: '#7FBA7A',
    7: '#A5CEA1',
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
