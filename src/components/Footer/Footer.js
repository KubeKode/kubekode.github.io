import React from "react";
import { Box } from "@mui/material";
import Copyright from "./Copyright";
import Categories from "./Categories";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0d1117",
        py: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        bottom: 0,
        width: "100vw",
        marginTop: "120px",
        color: "white",
        borderTop: "1px solid #3c3b3b54"
      }}
    >
      <Categories />
      <Copyright />
    </Box>
  );
};

export default Footer;
