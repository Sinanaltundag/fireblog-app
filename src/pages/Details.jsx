import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {  Button, ButtonGroup, Container, IconButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DeleteBlog } from '../utils/dataFunctions';

export default function Details() {
  const navigate =useNavigate();
  const location= useLocation();
  const blog = location.state.blog;
  const {id, title,date, img, like, comment, detail, author} = blog
 
  const {currentUser} = useSelector(state=> state.auth)
console.log(currentUser)

const handleDelete=()=>{
  DeleteBlog(id);
  navigate("/")
}
const handleUpdate=()=>{
navigate("/new-blog", {state: {blog}})
}

  return (
    <Container>
    <Card sx={{  margin:"100px auto" }}>
      <CardMedia
        component="img"
        alt={title}
        
        sx={{objectFit:"cover",width:"400px", margin:"0 auto",}}
        image={img}
      />
      <CardContent>
        <Typography  variant="h5" component="div" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>{date}</span><br />
        
          {detail}
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
    {author===currentUser&&<Container>
    <ButtonGroup variant="outlined" size="large" aria-label="outlined button group" fullWidth sx={{marginTop:5, marginBottom:5}}>
        <Button color="info" onClick={handleUpdate}>Update</Button>
        <Button color="error" onClick={handleDelete}>Delete</Button>
        
      </ButtonGroup></Container>}
    </Container>
  );
}
