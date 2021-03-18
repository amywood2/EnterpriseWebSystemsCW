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
import {read, updateTotalViews} from './api-user.js'
import {Redirect} from 'react-router-dom'
import Carousel from './../core/Carousel.js'
import cactus from './../assets/images/cactus.png'
import bee from './../assets/images/bee.png'
import city from './../assets/images/city.png'
import flower from './../assets/images/flower.png'
import iceburg from './../assets/images/iceburg.png'
import house from './../assets/images/house.png'
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

export default function Gallery({ match }) {
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

  const clickTotalViews = () => {
    const user = {
      name: values.name || undefined,
      about: values.about || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    updateTotalViews({
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
    <div style={{padding: "10px",  display: "grid", overflow: "hidden", gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))"}}>

    <div>
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Queen Bee
    </Typography>
    <img src={bee} alt="beeImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/QueenBee/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      Field of Dreams
    </Typography>
    <img src={field} alt="fieldImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/fieldOfDreams/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      The Land of Cactus
    </Typography>
    <img src={cactus} alt="cactusImage" style={{height: "200px", width: "300px"}} />
      <Typography variant="h6">
      </Typography>
      {auth.isAuthenticated() && (<span>
      <Link to={"/user/landOfCactus/" + auth.isAuthenticated().user._id}>
        <Button onClick={clickTotalViews}> View </Button>
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
      The City
    </Typography>
    <img src={city} alt="cityImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/theCity/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      Summer Bloom
    </Typography>
    <img src={flower} alt="flowerImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/summerBloom/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      Our Home
    </Typography>
    <img src={house} alt="houseImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/ourHome/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      Ice Cold
    </Typography>
    <img src={iceburg} alt="iceburgImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/iceCold/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
      Daisy Field
    </Typography>
    <img src={daisy} alt="daisyImage" style={{height: "200px", width: "300px"}} />
    <Typography variant="h6">
    </Typography>
    {auth.isAuthenticated() && (<span>
    <Link to={"/user/daisyField/" + auth.isAuthenticated().user._id}>
      <Button onClick={clickTotalViews}> View </Button>
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
