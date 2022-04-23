import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Container from "@mui/material/Container";
import {
  Avatar,
  Box,
  Button,
  
  TextField,
  Typography,
} from "@mui/material";
import Heading from "../components/Heading";
import blogIcon from "../assets/blok.png";
import { useSelector } from "react-redux";
import { AddBlog, EditBlog } from "../utils/dataFunctions";
import { useLocation, useNavigate } from "react-router-dom";




const NewBlog = () => {
  const [newBlog, setNewBlog] = useState({});
  const { currentUser } = useSelector((state) => state.auth);
  const d = new Date();
const navigate = useNavigate()
  const location= useLocation();
  const blog = location.state?.blog;
 
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewBlog({
      ...newBlog,
      [name]: value,
      author: currentUser,
      date: d.toDateString(),
      like:0,
      comment:[],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog)
    blog?EditBlog({...newBlog, id:blog.id}):AddBlog(newBlog)
    navigate("/")
  };
  return (
    <Wrapper>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "10px 10px 5px 1px black",
          padding: " 10px 0",
          marginTop: "4rem",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "primary.dark",
            height: 250,
            width: 250,
            margin: "1rem auto",
          }}
        >
          <img src={blogIcon} alt="blogIcon" />
        </Avatar>
        <Typography component="h1" variant="h5" width="100%">
          <Heading title={"New Blog"} />
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange={handleChange}
            defaultValue={blog?.title}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="img"
            label="Image URL"
            id="img"
            autoComplete="img"
            onChange={handleChange}
            defaultValue={blog?.img}
          />
          <TextField
            id="detail"
            label="Detail"
            fullWidth
            required
            multiline
            rows={8}
            name="detail"
            onChange={handleChange}
            defaultValue={blog?.detail}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {blog?"Update Blog":"Add New Blog"}
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default NewBlog;
