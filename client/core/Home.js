import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    }
  }
}))

class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Project One',
          subTitle: 'Project Title',
          //imgSrc: image,
          link: 'http://google.com',
          selected: false
        },
        {
          id: 2,
          title: 'Project two',
          subTitle: 'Project Title',
          //imgSrc: image,
          link: 'http://google.com',
          selected: false
        },
        {
          id: 3,
          title: 'Project three',
          subTitle: 'Project Title',
          //imgSrc: image,
          link: 'http://google.com',
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
        })
    }


  render() {
    return (
      <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
           </Container>
       );
      }
    }

export default function Home(){
  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            My Projects

          </Typography>


          <Carousel> </Carousel>

        </Card>
    );
}
