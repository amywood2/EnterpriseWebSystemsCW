import React from 'react';

import CardInfo from './../core/CardInfo';

const useStyles = makeStyles(theme => ({
  cardImage: {
    width: "10px",
    height: "10px",
    margin: "15px"
  }
}

function Card(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className={classes.cardImage} src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default Card;
