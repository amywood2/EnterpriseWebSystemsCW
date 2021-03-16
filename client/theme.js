import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#6b6466',
      main: '#6b6466',
      dark: '#6b6466',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6b6466',
      main: '#6b6466',
      dark: '#6b6466',
      contrastText: '#000',
    },
      openTitle: '#6b6466',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })


  export default theme
