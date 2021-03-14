import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from './../core/Carousel.js'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'

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
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    }
  },
  gcardimage: {
  border-radius: 10px;
  width: 300px;
  height: 480px;
  box-shadow: 0px 0px 3px 1px #ccc;
}
}))


export default function Home(props){
  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            My Projects

          </Typography>

          <div>
          <Carousel>This is the carousel </Carousel>
          </div>

        </Card>
    );
}
