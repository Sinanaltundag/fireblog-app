import styled from "@emotion/styled";
import { Box, createTheme,  ThemeProvider } from "@mui/material";
import React from "react";
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Girassol',
      'cursive',
    ].join(','),
  },});


const Heading = ({ title, color }) => {
  const Cizgi = styled.span`
    display: inline-block;
    border-top: ${color ? "3px solid  " : "3px solid "};
    height: 0;
    width: 10%;
    margin-bottom: 5px;
    margin: 0 5px;
    
  `;
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${color ? color :"primary.dark" }`,
        margin: "1rem 0",
        fontFamily:"Girassol"
      }}
    >
      <Cizgi />

      {`${title}`}

      <Cizgi />
    </Box>
    </ThemeProvider>
  );
};

export default Heading;
