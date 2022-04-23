import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {  Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({blog}) {
  const { title,date, img, like, comment, detail, author} = blog
  const navigate = useNavigate();
  const handleClick =()=>{
navigate("/details",{state: {blog} })
  }
  return (
    <Card sx={{ maxWidth: 345, margin:"auto" }}>
    <Box onClick={handleClick} sx={{cursor: "pointer"}}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        sx={{objectFit:"cover"}}
        image={img}
        
      />
      </Box>
      <CardContent>
        <Typography  variant="h5" component="div" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>{date}</span><br />
        
          {detail?.length>80?detail?.substring(0, 80)+"...":detail}
        </Typography>
        <Typography mt={3} fontSize={22}>
        <AccountCircle sx={{marginRight:1}}  variant=""/> <span>{author}</span> 
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton size='small' aria-label="like">
      <FavoriteIcon color="secondary" sx={{marginRight:1}}/> <span color="primary">{like}</span>
      </IconButton>
      <IconButton size='small' aria-label="like">
      <ChatBubbleOutlineIcon color="action" sx={{marginRight:1}}/> <span color="primary">{comment}</span>
      </IconButton>
      
      </CardActions>
    </Card>
  );
}
