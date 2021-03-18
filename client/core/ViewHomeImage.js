import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import houseImage from './../assets/images/house.png'


export default function ViewCactusImage() {
    return (
      <Card>
      <img src={houseImage} alt="houseImage" />
      </Card>
    )
}
