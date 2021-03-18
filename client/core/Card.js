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
import {read, update, projectInteraction} from './../user/api-user.js'
import {Redirect} from 'react-router-dom'



function Card(props){



    return(
        <div onClick={(e) => props.click(props.item)} >
            <img style= {{display: "inline-block", borderRadius: "10px", width: "80%", padding: "5px", float:"center"}} src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
          }
        </div>
    );
}
export default Card;
