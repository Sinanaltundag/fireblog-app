import { Avatar, Box, Container, CssBaseline, Typography } from '@mui/material';
import React from 'react'
import Wrapper from '../components/Wrapper';
import blogIcon from '../assets/blok.png'
import Heading from '../components/Heading';
import { useSelector } from 'react-redux';


const Profile = () => {

  const { currentUser}= useSelector(state => state.auth)  

  return (
    <Wrapper>

<Container component="main" maxWidth="xs" sx={{
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "10px 10px 5px 1px black",
          }} >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.dark", height:250, width:250 }}>
            <img src={blogIcon} alt="blogIcon"/>
          </Avatar>
          <Typography component="h1" variant="h5" width="100%" >
          <Heading title={currentUser} />
          </Typography>
          
          
        </Box>
      </Container>

    </Wrapper>
  )
}

export default Profile