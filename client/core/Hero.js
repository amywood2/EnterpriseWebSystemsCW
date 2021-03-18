import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'


const Hero = withRouter(({history}) => (
    <div style={{
      height: "40vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "contain"
    }}>
      <h1 style={{
        color: "#000",
        fontFamily: "Verdana",
        fontSize: '50px',
        marginTop:'-100px',
        textAlign:"center",
      }}> Discover my Projects </h1>

      <Link to="/signin">
        <Button color="primary" autoFocus="autoFocus" variant="contained">
          Sign In
        </Button>
      </Link>
      </div>
))
export default Hero
