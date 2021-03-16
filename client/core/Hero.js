import React from 'react'
import {Button} from './../core/Button.js'
import background from './../assets/images/img-home.jpg'


function Hero(){
  return(
    <div style={{
      backgroundImage: "url(" + background + ")",
      height: "90vh",
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
      }}> DISCOVER MY PROJECTS </h1>
      <p style={{
        marginTop: "8px",
        color: "#000",
        fontSize: "32px",
        fontFamily: 'Trebuchet MS',
        textAlign:"center",
      }}> Take a look below at my most recent projects. </p>
      <div className="hero-btns">
        <Button className='btns'buttonStyle='btn--outline'
          buttonSize='btn--large' >GET STARTED</Button>
      </div>
    </div>
  );
}
export default Hero
