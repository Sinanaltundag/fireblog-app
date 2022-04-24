import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import googleIcon from "../assets/google.png";
import blogIcon from "../assets/blok.png";

import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import { loginWithGoogle, register } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const theme = createTheme();



export default function Login() {
 
 const { currentUser } = useSelector(state => state.auth)
  const navigate = useNavigate()
React.useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user ={
      email: data.get("email"),
      password: data.get("password"),
    };
    register(user.email, user.password)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      toast(error);
    });
    console.log(user)
  };
  const handleWithGoogle =()=>{
    loginWithGoogle()
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "10px 10px 5px 1px black",
            padding: "10px 0"
          }}
        >
          <CssBaseline />
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
            <Typography component="h1" variant="h5" width="100%">
              <Heading title={"Register"} />
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                <Typography
                  variant="button"
                  mr={2}
                  fontWeight="bold"
                  color="grey.900"
                >
                  with
                </Typography>
                <img src={googleIcon} alt="google" height="36"
                onClick={handleWithGoogle} />
              </Button>
            </Box>
          </Box>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}
