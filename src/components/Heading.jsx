import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ title, light }) => {
  const Cizgi = styled.span`
    display: inline-block;
    border-top: ${light ? "3px solid  " : "3px solid "};
    height: 0;
    width: 10%;
    margin-bottom: 5px;
    margin: 0 5px;
    
  `;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${light ? "white" : "#1976D2"}`,
        margin: "1rem 0",
      }}
    >
      <Cizgi />

      {`${title}`}

      <Cizgi />
    </Box>
  );
};

export default Heading;
