import React from 'react'
import {Button} from './Button'
import './Hero.css'

function Hero(){
  return(
    <div className='hero-container'>
      <video src="./../assets/images/video-2.mp4" autoPlay loop muted />
      <h1> DISCOVER MY PROJECTS </h1>
      <p> Take a look below at my most recent projects. </p>
      <div className="hero-btns">
        <Button className='btns'>GET STARTED</Button>
      </div>
    </div>
  )
}
export default Hero
