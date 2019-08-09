import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImgSample from './../supports/img/carousel/img4.jpg'
import { BookmarkBorderOutlined} from '@material-ui/icons'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ImgSample}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h6">
            Membuat Single Page Application dengan React
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions className='d-flex justify-content-between'>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary">
          <BookmarkBorderOutlined/>
        </Button>
      </CardActions>
    </Card>
  );
}