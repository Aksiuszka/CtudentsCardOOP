import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    primary: {
      orange: '#e49233',
      white: '#FEFEFE',
      red: '#b94f41',
    },
    text: {
      heading: '#413960',
    },
    background: {
      mainGradient: 'linear-gradient(90deg, hsla(212, 13%, 41%, 1) 0%, hsla(3, 100%, 9%, 1) 100%)',
      secondaryGradient: ' ',
    },
  },
  fontFamily: {
    main: 'Lato, sans-serif',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '3.3rem',
  },
  fontWeight: {
    regular: '300',
    medium: '400',
    semiBold: '700',
    bold: '900',
  },
  breakpoints: {
    sm: '',
    md: '',
    lg: '',
  },
  extend: {
    borderRadius: {
      button: '',
      card: '',
      form: '',
      input: '',
    },
    boxShadowing: {
      regular: '10px -4px 22px 0px #3a3a3a',
      secondary: '10px -4px 22px 0px #000000',
    },
  },
};
export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
