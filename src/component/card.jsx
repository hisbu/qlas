import React from 'react';
import {Link} from 'react-router-dom'

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
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageCard}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h6">
            {props.titleCard}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='d-flex justify-content-between'>
        <Button size="small" color="primary">
          <Link to='/detail'>
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