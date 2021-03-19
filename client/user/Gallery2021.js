import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import auth from './../auth/auth-helper'
import {read, collection2021ImageViews} from './api-user.js'
import {Redirect} from 'react-router-dom'
import Carousel from './../core/Carousel.js'
import balloon from './../assets/images/balloon.png'
import bird from './../assets/images/bird.png'
import carrot from './../assets/images/carrot.png'
import cat from './../assets/images/cat.png'
import girl from './../assets/images/girl.png'
import grapes from './../assets/images/grapes.png'
import paint from './../assets/images/paint.png'
import swim from './../assets/images/swim.png'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import {Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Gallery2021({ match }) {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    about:'',
    password: '',
    email: '',
    open: false,
    error: '',
    redirectToProfile: false
  })
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: data.name, email: data.email, about: data.about})
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.userId])

  const click2021Image = () => {
    const user = {
      name: values.name || undefined,
      about: values.about || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    collection2021ImageViews({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, userId: data._id, redirectToProfile: false})
      }
    })
  }

    return (
    <div style={{display: "grid", overflow: "hidden", gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))"}}>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
        High Up In a Hot Air Balloon
    </Typography>
    <img src={balloon} alt="balloonImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/Airballoon/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      River Bird
    </Typography>
    <img src={bird} alt="birdImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/riverBird/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Carrots for tea
    </Typography>
    <img src={carrot} alt="carrotImage" style={{height: "200px", width: "300px"}} />
      <Typography variant="h6">
      </Typography>
      {auth.isAuthenticated() && (<span>
      <Link to={"/user/carrotsForTea/" + auth.isAuthenticated().user._id}>
        <Button onClick={click2021Image}> View </Button>
      </Link>
      </span>)
      }
      <IconButton aria-label="Save">
      <FavoriteBorderOutlinedIcon/>
     </IconButton>
   </Card>
  </div>

  <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
       Stalking Cat
    </Typography>
    <img src={cat} alt="catImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/stalkingCat/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>



    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Dreaming
    </Typography>
    <img src={girl} alt="girlImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/Dreaming/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      A bunch
    </Typography>
    <img src={grapes} alt="grapesImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/aBunch/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Painting Lines
    </Typography>
    <img src={paint} alt="paintImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/paintingLines/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Swim and win
    </Typography>
    <img src={swim} alt="swimImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/swimAndWin/" + auth.isAuthenticated().user._id}>
      <Button onClick={click2021Image}> View </Button>
    </Link>
    </span>)
    }
    <IconButton aria-label="Save">
        <FavoriteBorderOutlinedIcon/>
    </IconButton>
    </Card>
    </div>

    </div>
    )
}
