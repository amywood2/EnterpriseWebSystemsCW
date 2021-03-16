import React from 'react'
import {Button} from './../core/Button.js'

function Hero(){
  return(
    <div className='hero-container'>
      <video src="./../assets/images/video-2.mp4" autoPlay loop muted />
      <h1> DISCOVER MY PROJECTS </h1>
      <p> Take a look below at my most recent projects. </p>
      <div className="hero-btns">
        <Button className='btns'buttonStyle='btn--outline'
          buttonSize='btn--large' >GET STARTED</Button>
      </div>
    </div>
  );
}
export default Hero
