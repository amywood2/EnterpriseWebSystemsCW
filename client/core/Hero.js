import React from 'react'
import Button from '@material-ui/core/Button'
import background from './../assets/images/img-home.jpg'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'


const Hero = withRouter(({history}) => (
    <div style={{
      //backgroundImage: "url(" + background + ")",
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


      <div>
      <Link to="/gallery">
        <Button>
        ENTER THE GALLERY
        </Button>
      </Link>
      </div>
      </div>
))
export default Hero
