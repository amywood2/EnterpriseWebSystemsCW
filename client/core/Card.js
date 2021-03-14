import React from 'react';

import CardInfo from './../core/CardInfo';


function Card(props) {

    return(
        <div onClick={(e) => props.click(props.item)}>
            <img style= {{"border-radius": "10px", width: "100px", height: "100px", "box-shadow": "0px 0px 3px 1px #ccc"}} src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default Card;
