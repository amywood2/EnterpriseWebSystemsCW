import CardInfo from './../core/CardInfo';
import React, {useState, useEffect} from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import auth from './../auth/auth-helper'
import {read, update} from './../user/api-user.js'
import {Redirect} from 'react-router-dom'

function Card(props, { match }) {

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      about: values.about || undefined,
      project1_clicks: value.project1_clicks || undefined
    }
    projectInteraction({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, userId: data._id, redirectToProfile: true})
      }
    })
  }
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }
    return(
        <div onClick={(e) => props.click(props.item)} onChange={handleChange('project1_clicks')}>
            <img style= {{"borderRadius": "10px", width: "80%", padding: "5px", float:"center"}} src={props.item.imgSrc} alt={props.item.imgSrc}  onClick={clickSubmit}/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} onClick={clickSubmit} /> }

        </div>
    );
}
export default Card;
