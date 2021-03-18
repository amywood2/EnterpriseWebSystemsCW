import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import flowerImage from './../assets/images/flower.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={flowerImage} alt="flowerImage" />
      </Card>
    )
}
