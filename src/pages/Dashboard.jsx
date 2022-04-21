import { Box,  Grid, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <Box>
        <Typography variant="h3" component="div" >
          <Heading title={"Dashboard"} />
        </Typography>
      <Box alignItems='center'
    justify='center'>
        <Grid
          textAlign="left"
          container
          spacing={{ xs: 1, md: 2 }}
          alignItems="center"
  justifyContent="center"
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item sm={12} md={6} lg={4} xl={3} key={index}>
              <BlogCard/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
