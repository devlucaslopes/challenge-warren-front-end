export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  colors: {
    primary: '#E02B57',
    gray: '#2E2D33',
    'gray-light': '#F5F6FA',
    white: '#fff'
  },
  font: {
    family: 'Roboto, sans-serif',
    sizes: {
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem'
    }
  },
  spacings: {
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
