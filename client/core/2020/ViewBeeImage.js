import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import beeImage from '../../assets/images/bee.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1100,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
}))

export default function ViewBeeImage() {
  const classes = useStyles()


    return (
      <Card className={classes.card}>
      <img src={beeImage} alt="beeImage" style={{height: "550px", width: "1100px"}}/>
      </Card>

    )
}
