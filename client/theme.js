import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#4C4C4C',
      main: '#4C4C4C',
      dark: '#4C4C4C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4C4C4C',
      main: '#4C4C4C',
      dark: '#4C4C4C',
      contrastText: '#000',
    },
      openTitle: '#6b6466',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })


  export default theme
