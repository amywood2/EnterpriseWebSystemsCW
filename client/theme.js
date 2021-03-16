import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  //   palette: {
  //     primary: {
  //     //light: '#5c67a3',
  //     //main: '#3f4771',
  //     //dark: '#2e355b',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     light: '#ff79b0',
  //     main: '#ff4081',
  //     dark: '#c60055',
  //     contrastText: '#000',
  //   },
  //     openTitle: '#3f4771',
  //     protectedTitle: pink['400'],
  //     type: 'light'
  //   }
  // })
    palette: {
      primary: {
      light: '#a395ad',
      main: '#706677',
      dark: '#564f5c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#C5ED7A',
      main: '#A8F120',
      dark: '#5A8013',
      contrastText: '#ffffff',
    },
      openTitle: '#706677',
      protectedTitle: '#7f2cc7',
      type: 'light'
    }
    })
  // })

  export default theme
