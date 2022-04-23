import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { EditBlog } from "../utils/dataFunctions";
import { useState } from "react";

export default function CommentBox({ blog }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState(false);

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
    blog.comment? EditBlog({...blog, comment: [...blog.comment, comment]}):EditBlog({...blog, comment: [comment]})
    setOpen(false);
  };
  return (
    <div>
      <IconButton size="small" aria-label="like" onClick={handleClickOpen}>
        <ChatBubbleOutlineIcon color="action" sx={{ marginRight: 1 }} />{" "}
        <span color="primary">{blog.comment?.length}</span>
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
            helperText="Max 100 character you can write"
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
