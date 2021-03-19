import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  footerContainer: {
  backgroundcolor: "#242424",
  padding: "4rem 0 2rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  }
}))


function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <section className='footer-subscription'>
      <Typography className={classes.title}>
        All images curtsy of Microsoft PowerPoint Stock Images
      </Typography>
      </section>
    </div>
  );
}

export default Footer;
