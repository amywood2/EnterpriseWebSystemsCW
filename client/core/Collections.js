import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'


export default function Collections({ match }){

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
     <Button color="primary" autoFocus="autoFocus" variant="contained" >
       Collection 2020
     </Button>
     </Link>
     </span>)
     }
     {auth.isAuthenticated() && (<span>
     <Link to={"/user/gallery2021/" + auth.isAuthenticated().user._id}>
     <Button color="primary" autoFocus="autoFocus" variant="contained">
       Collection 2021
     </Button>
     </Link>
     </span>)
     }
     </div>
    )



 }
