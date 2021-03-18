import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#000',
      main: '#5e5d5d',
      dark:  '#000',
      contrastText: '#fff',
    },
    secondary: {
      light:  '#000',
      main:  '#000',
      dark:  '#000',
      contrastText: '#6b6466',
    },
      //openTitle: '#6b6466',
    //  protectedTitle: pink['400'],
      //type: 'light'
    }
  })


  export default theme
