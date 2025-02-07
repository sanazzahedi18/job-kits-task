import '@mui/material/styles'
import '@mui/material/Typography'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties
  }
      //ch
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties
  }
}
      //ch
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true
  }
}
