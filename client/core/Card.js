import React from 'react';

import CardInfo from './../core/CardInfo';


function updateProject1Clicks(project1_clicks){
  return project1_clicks = project1_clicks + 1;
}

function updateProject2Clicks(project2_clicks){
  return project2_clicks = project2_clicks + 1;
}

function Card(props) {

    return(
        <div onClick={(e) => props.click(props.item)}>
            <img style= {{"borderRadius": "10px", width: "80%", padding: "5px", float:"center"}} src={props.item.imgSrc} alt={props.item.imgSrc} onClick={updateProject1Clicks} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>


    );

}

export default Card;
