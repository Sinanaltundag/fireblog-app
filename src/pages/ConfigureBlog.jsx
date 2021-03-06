import Wrapper from "../components/Wrapper";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import Heading from "../components/Heading";
import blogIcon from "../assets/blok.png";
import { useSelector } from "react-redux";
import { AddBlog, EditBlog } from "../utils/dataFunctions";
import { useLocation, useNavigate } from "react-router-dom";

const ConfigureBlog = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const d = new Date();
  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.state?.blog;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { title, detail, img } = {
      title: data.get("title"),
      detail: data.get("detail"),
      img: data.get("img"),
    };

    const newBlog = {
      ...blog,
      title,
      detail,
      img,
      author: currentUser?.email,
      date: d.toDateString(),
    };

    blog ? EditBlog({ ...newBlog, id: blog.id }) : AddBlog(newBlog);
    navigate("/");
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
          <Heading title={blog ? "Update Blog" : "New Blog"} />
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
            defaultValue={blog?.detail}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {blog ? "Update Blog" : "Add New Blog"}
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ConfigureBlog;
