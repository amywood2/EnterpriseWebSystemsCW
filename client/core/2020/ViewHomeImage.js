import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import homeImage from '../../assets/images/house.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1100,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
}))

export default function ViewHomeImage() {
  const classes = useStyles()


    return (
      <Card className={classes.card}>
      <img src={homeImage} alt="homeImage" style={{height: "550px", width: "1100px"}}/>
      </Card>

    )
}
