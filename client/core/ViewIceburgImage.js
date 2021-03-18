import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import iceburgImage from './../assets/images/iceburg.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={iceburgImage} alt="iceburgImage" />
      </Card>
    )
}
