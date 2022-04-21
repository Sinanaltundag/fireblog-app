import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const Heading = ({title,light}) => {
  const Cizgi = styled.span`
    display: inline-block;
    border-top: ${light ? "3px solid  ":"3px solid "};
    height: 0;
    width: 100px;
    margin-bottom: 5px;
  `;
  return (
    <Box sx={{ display:"flex", justifyContent:"center",alignItems:"center", color:`${light?"white":"#1976D2"}` }}>
      <Cizgi />
      {`${title}`}
      <Cizgi />
    </Box>
  );
};

export default Heading;
