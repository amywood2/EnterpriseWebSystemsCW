import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import beeImage from './../assets/images/bee.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={beeImage} alt="beeImage" />
      </Card>

    )
}
