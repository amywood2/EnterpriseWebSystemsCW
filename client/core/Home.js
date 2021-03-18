import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from './../core/Carousel.js'
import {Link} from 'react-router-dom'
import Hero from './../core/Hero.js'
import Footer from './../core/Footer.js'
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    }
  }
}))


export default function Home(props){
  const classes = useStyles()
    return (
      <>
      <Card>
          <Hero> </Hero>
          </Card>
        <Footer> </Footer>

      </>
    );
}
