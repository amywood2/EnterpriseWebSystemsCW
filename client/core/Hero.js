import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'


const Hero = withRouter(({history}) => (
    <div style={{
      height: "85vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "contain"
    }}>
      <h1 style={{
        color: "#000",
        fontSize: '30px',
        marginTop:'-100px',
        textAlign:"center",
        fontFamily:"Verdana"
      }}> Enter the Gallery </h1>

      <Link to="/signin">
        <Button color="primary" autoFocus="autoFocus" variant="contained">
          Sign In
        </Button>
      </Link>
      </div>
))
export default Hero
