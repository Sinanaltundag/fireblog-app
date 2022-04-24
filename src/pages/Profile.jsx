import { Avatar, Box, Button, ButtonGroup, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import blogIcon from "../assets/blok.png";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";
import { useFetch } from "../utils/dataFunctions";
import loadingIcon from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  const [selfPostBlogs, setSelfPostBlogs] = useState([]);
  const { currentUser } = useSelector((state) => state.auth);
const navigate=useNavigate()
  const { isLoading, blogArray } = useFetch();

  console.log(blogArray[0]?.like);

  useEffect(() => {
    if (blogArray.length > 1) {
      const userLikes = blogArray?.filter((blog) =>blog.like.includes(currentUser));
      setFavoriteBlogs(userLikes);
      const userPosts = blogArray?.filter((blog)=> blog.author===currentUser);
      setSelfPostBlogs(userPosts)
    }
  }, [blogArray, currentUser]);

  return (
    <Wrapper>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "10px 10px 5px 1px black",
        }}
      >
        <CssBaseline />
        {isLoading ? (
          <img src={loadingIcon} alt="" />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "primary.dark", height: 250, width: 250 }}
            >
              <img src={blogIcon} alt="blogIcon" />
            </Avatar>
            <Typography component="h1" variant="h3" width="100%">
              <Heading title={currentUser} />
        
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Typography component="h1" variant="h5" width="100%" sx={{ color: "secondary", }} >
              <Heading title="Your Blogs" color="primary.light" />
        
            </Typography>
  <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
        fullWidth
      >
        {selfPostBlogs.map((blog, i) => (
              <Button key={i}  onClick={()=>navigate("/details", {state: {blog}})}  >{blog.title}      
              </Button>
            ))}
      </ButtonGroup>
  </Grid>
  <Grid item xs={6}>
  <Typography component="h1" variant="h5" width="100%">
              <Heading title="Favorites"  color="primary.light" />
        
            </Typography>
  <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
        fullWidth
      >
        {favoriteBlogs.map((blog, i) => (
              <Button key={i}  onClick={()=>navigate("/details", {state: {blog}})}  >{blog.title}      
              </Button>
            ))}
      </ButtonGroup>
  </Grid>
  </Grid>
       
            
          </Box>
        )}
      </Container>
    </Wrapper>
  );
};

export default Profile;
