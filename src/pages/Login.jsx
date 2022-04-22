
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import googleIcon from "../assets/google.png";
import blogIcon from "../assets/blok.png";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import { login, loginWithGoogle } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const theme = createTheme();



const Login=()=> {
  const { currentUser } = useSelector(state => state.auth)
  const navigate = useNavigate()
useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user=({
      email: data.get("email"),
      password: data.get("password"),
    });
    login(user.email, user.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleWithGoogle =()=>{
    loginWithGoogle()
  }

  return (
    <ThemeProvider theme={theme}>
    <Wrapper >
      <Container component="main" maxWidth="xs"  sx={{
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "10px 10px 5px 1px black",
padding: " 10px 0"
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
          <Heading title={"Login"} />
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
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
            <Grid container>
              <Grid item xs>
                <Link to={"/"}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Wrapper>
    </ThemeProvider>
  );
}


export default Login;