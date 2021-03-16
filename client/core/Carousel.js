import React from 'react';

import Card from './../core/Card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import projectIcon from './../assets/images/projectIcon.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project One',
                    subTitle: 'Description of project',
                    imgSrc: projectIcon,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project Two',
                    subTitle: 'Description of project',
                    imgSrc: projectIcon,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project Three',
                    subTitle: 'Description of project',
                    imgSrc: projectIcon,
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
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            if(item[id].selected == 0 && item.selected == true){
              user.updateProject1Clicks;
            }
            if(item[id].selected == 1 && item.selected == true){
              user.updateProject2Clicks;
            }
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                <div style={{display: "flex", padding: "50px", float:"center", textAlign: "center"}}>
                    {this.makeItems(this.state.items)}
                </div>
                </Row>
            </Container>
        );
    }

}

export default Carousel;
