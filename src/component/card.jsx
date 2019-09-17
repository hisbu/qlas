import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

// style
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ImgSample from './../supports/img/carousel/img4.jpg'
import { BookmarkBorderOutlined} from '@material-ui/icons'
// import { API_URL } from '../helpers'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

// export default function MediaCard(props) {
  class MediaCard extends React.Component{
    render(){
      const {card} = useStyles;

      return (
        <Card className={card}>
          <CardActionArea>
            <CardMedia
              style={{height:140}}
              // className={media}
              image={this.props.imageCard}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h6">
                {this.props.titleCard}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='d-flex justify-content-between'>
            <Button size="small" color="primary">
              <Link to={this.props.kelasId}>
                Learn More
              </Link>
            </Button>
            <Button size="small" color="primary">
              <BookmarkBorderOutlined/>
            </Button>
          </CardActions>
        </Card>
      );
    }
}

const mapStateToProps = ({kelas}) => {
  return {
    kelas : kelas
  }
}

export default connect(mapStateToProps) (MediaCard);