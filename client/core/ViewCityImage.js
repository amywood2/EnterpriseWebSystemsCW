import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import cityImage from './../assets/images/city.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={cityImage} alt="cityImage" />
      </Card>
    )
}
