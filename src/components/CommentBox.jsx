import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import { EditBlog } from "../utils/dataFunctions";
import { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { toast } from "react-toastify";

const commentDate = new Date();


export default function CommentBox({ blog }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setComment(e.target.value)
  };
  const handleComment = () => {
    comment.length>5 ?blog.comments? EditBlog({...blog, comments: [...blog.comments, {commentDate:commentDate.toDateString(),comment:comment}]}):EditBlog({...blog, comments: [{commentDate:commentDate.toDateString(),comment:comment}]}):toast("Min 5 character")
    setOpen(false);
  };
  let helperText =`10 - 100 character you can write. Remained character: ${100-comment.length}`
  return (
    <div>
      <IconButton size="small" aria-label="like" onClick={handleClickOpen}>
        <AddCommentIcon color="action" sx={{ marginRight: 1 }} />{" "}
        <span color="primary">{blog.comments?.length||0}</span>
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send what you want about subject...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            multiline
            rows={4}
            id="comment"
            label="Your Comment"
            type="text"
            fullWidth
            variant="standard"
            //! input max character 
            inputProps={{
              maxLength: 100,
            }}
            helperText={helperText}
            onChange={handleChange}
          />
    
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleComment}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
