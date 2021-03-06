import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import blogIcon from "../assets/blok.png";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";
import loadingIcon from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  const [selfPostBlogs, setSelfPostBlogs] = useState([]);
  const { currentUser } = useSelector((state) => state.auth);
  const { blogList, isLoading } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    if (blogList) {
      const userLikes = blogList?.filter((blog) =>
        blog.like?.includes(currentUser?.email)
      );
      setFavoriteBlogs(userLikes);
      const userPosts = blogList?.filter(
        (blog) => blog.author === currentUser?.email
      );
      setSelfPostBlogs(userPosts);
    }
  }, [blogList, currentUser]);

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
              <img src={currentUser.photoURL || blogIcon} alt="blogIcon" />
            </Avatar>
            <Typography component="h1" variant="h3" width="100%">
              <Heading title={currentUser?.displayName} />
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  component="h1"
                  variant="h5"
                  width="100%"
                  sx={{ color: "secondary" }}
                >
                  <Heading title="Your Blogs" color="primary.light" />
                </Typography>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="text"
                  fullWidth
                >
                  {selfPostBlogs.map((blog, i) => (
                    <Button
                      key={i}
                      onClick={() => navigate("/details", { state: { blog } })}
                    >
                      {blog.title}
                    </Button>
                  ))}
                </ButtonGroup>
              </Grid>
              <Grid item xs={6}>
                <Typography component="h1" variant="h5" width="100%">
                  <Heading title="Favorites" color="primary.light" />
                </Typography>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="text"
                  fullWidth
                >
                  {favoriteBlogs.map((blog, i) => (
                    <Button
                      key={i}
                      onClick={() => navigate("/details", { state: { blog } })}
                    >
                      {blog.title}
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
