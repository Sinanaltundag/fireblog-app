import { Box, Grid, Typography } from "@mui/material";

import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import loadingIcon from "../assets/loading.gif";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { blogList, isLoading } = useSelector((state) => state.blog);

  return (
    <Box marginTop={10}>
      {isLoading ? (
        <img src={loadingIcon} alt="" />
      ) : (
        <div>
          <Typography variant="h3" component="div">
            <Heading title={"Dashboard"} />
          </Typography>
          <Box alignItems="center" justify="center">
            <Grid
              textAlign="left"
              container
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              justifyContent="center"
            >
              {blogList?.map((blog) => (
                <Grid item sm={12} md={6} lg={4} xl={3} key={blog.id}>
                  <BlogCard blog={blog} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Dashboard;
