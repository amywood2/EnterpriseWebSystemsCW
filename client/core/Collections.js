import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'


const Hero = withRouter(({history}) => (
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
      }}> Welcome To The Gallery </h1>

      {auth.isAuthenticated() && (<span>
      <Link to={"/user/gallery/" + auth.isAuthenticated().user._id}>
      <Button color="primary" autoFocus="autoFocus" variant="contained">
        Collection 2020
      </Button>
      </Link>
      </span>)
      }

      <Link to="/signin">
        <Button color="primary" autoFocus="autoFocus" variant="contained">
          Collection 2021
        </Button>
      </Link>
      </div>
))
export default Hero
