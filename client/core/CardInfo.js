import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div style={{"margin-top": "10px", "min-height": "100px"}}>
            <p style={{"font-size":"20px", margin: "0px"}}>{props.title}</p>
            <p style={{"font-size":"16px", margin: "0px"}}>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            <Link to={}>
              <Button style={}>My Profile</Button>
            </Link>
        </animated.div>
    );

}

export default CardInfo;
