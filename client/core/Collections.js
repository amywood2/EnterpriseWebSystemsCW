import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import {read, updateCollection2020, updateCollection2021} from './api-user.js'


export default function Collections({ match }){
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

  const clickCollection2020 = () => {
    const user = {
      name: values.name || undefined,
      about: values.about || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    updateCollection2020({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, userId: data._id, redirectToProfile: true})
      }
    })
  }

  const clickCollection2021 = () => {
    const user = {
      name: values.name || undefined,
      about: values.about || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    updateCollection2021({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, userId: data._id, redirectToProfile: true})
      }
    })
  }
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }
  return (
    <div style={{
      height: "50vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "contain"
    }}>
    <h1 style={{
      color: "#000",
      fontSize: '40px',
      marginTop:'-100px',
      textAlign:"center",
    }}> Welcome to the Gallery </h1>
    <p> Our 2020 Collection has been are most successful and we are so proud to share it with you. </p>
    <p> The new collection aims to inspire and encourage young photographers to take in the world. </p>
    {auth.isAuthenticated() && (<span>
     <Link to={"/user/gallery2020/" + auth.isAuthenticated().user._id}>
     <Button onClick={clickCollection2021} color="primary" autoFocus="autoFocus" variant="contained" >
       Collection 2020
     </Button>
     </Link>
     </span>)
     }
     {auth.isAuthenticated() && (<span>
     <Link to={"/user/gallery2021/" + auth.isAuthenticated().user._id}>
     <Button onClick={clickCollection2020} color="primary" autoFocus="autoFocus" variant="contained">
       Collection 2021
     </Button>
     </Link>
     </span>)
     }
     </div>
    )



 }
