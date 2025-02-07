'use client'
import { BorderColor, NatOutlined } from '@mui/icons-material'
import { createTheme, OutlinedInput, responsiveFontSizes } from '@mui/material'
import { common } from '@mui/material/colors'
import { error } from 'console'

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#1f2430',
      light: '#dfe3e8',
      dark: '#22282F',
      // contrastText: '',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    secondary: {
      main: '#121418',
      light: '#c4cdd5',
      dark: '#272A31',
      // contrastText: '',
    },
    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: '',
    // },
    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    //   contrastText: '',
    // },
    info: {
      main: '#00a76f',
      light: '#919eab',
      dark: '#161C24',
      // contrastText: '',
    },
    success: {
      main: '#b7c1c9',
      light: '#2F3944',
      dark: '#212b36',
      // contrastText: '',
    },
  },
  typography: {
    fontFamily: 'var(--font-vazir)',
    h4: {
      fontWeight: 700,
      fontSize: '32px',
    },
    h5: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h1: {
      fontWeight: 800,
      fontSize: '30px',
    },
    h2: { fontWeight: 500, fontSize: '14px' },
    // poster:{}
    h3: {
      fontWeight: 700,
      fontSize: '14px',
    },

    h6: {
      fontWeight: 400,
      fontSize: '14px',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    // caption:{}
    subtitle2: { fontWeight: 400, fontSize: '12px' },
    body1: {
      fontWeight: 600,
      fontSize: '14px',
    },
    body2: { fontWeight: 600, fontSize: '16px' },
  },

  cssVariables: true,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: common.white,
          borderRadius: '8px',
          borderColor: '#919eab',
          '&:hover': { borderColor: '#fff' },
        },
        contained: {
          color: '#212b36',
          borderRadius: '8px',
          backgroundColor: common.white,
          '&:hover': { backgroundColor: 'rgb(196, 205, 213)' },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: 'success',
      },
      styleOverrides: {
        root: {
          borderColor: 'blue',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: '#919eab',
        },
        notchedOutline: {
          borderColor: '#919eab',
          textAlign: 'right',
          '&:hover': {
            BorderColor: 'green',
          },
        },
        root: {
          color: 'palegreen',
          '&:hover': {
            OutlinedInput: {
              notchedOutline: {
                BorderColor: 'orange',
              },
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#919eab',
          left: 'auto',
          right: 10,
          transformOrigin: 'right',
          transform: 'translate(0, 16px) scale(1)',
          '&.Mui-focused': {
            transform: 'translate(0, -9px) scale(0.75)',
            color: '#919eab',
          },
        },
      },
    },

    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h1: 'h2',
    //       h2: 'h2',
    //       h3: 'h2',
    //       h4: 'h2',
    //       h5: 'h2',
    //       h6: 'h2',
    //       subtitle1: 'h2',
    //       subtitle2: 'h2',
    //       body1: 'span',
    //       body2: 'span',
    //     },
    //   },
    // },
  },
})
const app_theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  variants: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ],
  factor: 1.5,
})
export { app_theme, theme }
