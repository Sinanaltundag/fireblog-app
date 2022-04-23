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
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { EditBlog } from '../utils/dataFunctions';
import CommentBox from './CommentBox';

export default function BlogCard({blog}) {
  let { title,date, img, like, comment, detail, author} = blog
  // const [openComment, setOpenComment] = useState(false)
  const {currentUser} = useSelector(state=> state.auth)
  const navigate = useNavigate();
  const handleClick =()=>{
    if (currentUser) {
      navigate("/details",{state: {blog} })
    } else{
      toast("You must Login for see details");
      navigate("/login");
    }
   
  }

const handleLiked =()=>{
  EditBlog({...blog, like:like+=1})
}
const handleComment =()=>{
// setOpenComment(true)
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
      <IconButton size='small' aria-label="like" onClick={handleLiked}>
      <FavoriteIcon color="secondary" sx={{marginRight:1}}/> <span color="primary">{like}</span>
      </IconButton>
      <IconButton size='small' aria-label="like" onClick={handleComment}>
      <ChatBubbleOutlineIcon color="action" sx={{marginRight:1}}/> <span color="primary">{comment}</span>
      </IconButton>
      <CommentBox blog={blog}/>
      </CardActions>
    </Card>
  );
}
