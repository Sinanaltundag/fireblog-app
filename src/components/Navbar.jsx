import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AccountCircle } from "@mui/icons-material";
import cwLogo from "../assets/cw.jpeg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Heading from "./Heading";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { logout, userObserver } from "../utils/firebase";
import { clearCurrentUser } from "../redux/actions/authActions";
import { useEffect, useState } from "react";

export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout =()=>{
    logout();
    handleClose();
    dispatch(clearCurrentUser)
  }
 /*  const user= userObserver()
  useEffect(() => {
    console.log(user)
  }, [user]) */
  
  const {currentUser} = useSelector((state)=>state.auth)
  // console.log(currentUser)


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={currentUser ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"}>
            <img src={cwLogo} alt="" width="40" />
          </Link>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
           {matches&&(
            <Link to={"/"}>
             <Heading title={"<Sinan/> Blog"} light/>
             </Link>
           ) }
          </Typography>
            <Typography variant="h5" >
              {currentUser}
            </Typography>
            <div>
            
          
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          {currentUser ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={handleClose} component={Link} to="/profile" >Profile </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/new-blog" >New </MenuItem>
              <MenuItem onClick={handleLogout}  >Logout </MenuItem>
  
              </Menu>
          ):(
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/login" >Login </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/register" >Register </MenuItem>
              </Menu>
          )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
