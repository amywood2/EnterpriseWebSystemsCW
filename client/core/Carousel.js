import React, {useState, useEffect} from 'react'
import Card from './../core/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import projectIcon from './../assets/images/projectIcon.png'
import podcastIcon from './../assets/images/newpodcast.png'
import websiteIcon from './../assets/images/newwebsite.png'
import blogIcon from './../assets/images/newblog.png'
import {read, projectInteraction} from './../user/api-user.js'
import auth from './../auth/auth-helper'

class Carousel extends React.Component {

    constructor(props, {match}) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project One',
                    subTitle: 'Description of project',

                    imgSrc: podcastIcon,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project Two',
                    subTitle: 'Description of project',
                    imgSrc: websiteIcon,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Project Three',
                    subTitle: 'Description of project',
                    imgSrc: blogIcon,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Project One',
                    subTitle: 'Description of project',

                    imgSrc: podcastIcon,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Project Two',
                    subTitle: 'Description of project',
                    imgSrc: websiteIcon,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false

                },
                {
                    id: 5,
                    title: 'Project Three',
                    subTitle: 'Description of project',
                    imgSrc: blogIcon,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });

        this.update()
      }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />

        })
    }

    changeImgScr = (imgSrc) => {
      return items.map(item => {
        return <Card item={item} />
      })
    }

    render() {
        return(

                <div style={{textAlign: "center"}}>
                    {this.makeItems(this.state.items)}
                </div>

        );
    }

}

export default Carousel;
