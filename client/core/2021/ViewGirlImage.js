import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import girlImage from './../assets/images/girl.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1100,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
}))

export default function ViewGirlImage() {
  const classes = useStyles()


    return (
      <Card className={classes.card}>
      <img src={girlImage} alt="girlImage" style={{height: "550px", width: "1100px"}}/>
      </Card>

    )
}
