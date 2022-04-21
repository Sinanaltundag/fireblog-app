import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {  IconButton } from '@mui/material';

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345, margin:"auto" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        objectFit={true}
        image="https://picsum.photos/300/200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>May 17, 2022</p>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography mt={3} fontSize={22}>
        <AccountCircle gutterTop variant=""/> <span>aaa@aaa.aaa</span> 
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton size='small' aria-label="like">
      <FavoriteIcon color="secondary"/> <span color="primary">2</span>
      </IconButton>
      <IconButton size='small' aria-label="like">
      <ChatBubbleOutlineIcon color="action"/> <span color="primary">2</span>
      </IconButton>
      
      </CardActions>
    </Card>
  );
}
