import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import cactus from './../assets/images/cactus.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={cactus} alt="cactusImage" />
      </Card>
    )
}
