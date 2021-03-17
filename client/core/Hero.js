import React from 'react'
import {Button} from './../core/Button.js'
import background from './../assets/images/img-home.jpg'
import {Link, withRouter} from 'react-router-dom'


function Hero(){
  return(
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
      <div className="hero-btns">
      <Link to="/signin">
        <Button className='btns'buttonStyle='btn--outline'
          buttonSize='btn--large' >Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Hero
