import React from "react";
import { Typography, Box } from "@mui/material";
import SocialIcons from "../Home/SocialBar";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0d1117",
        py: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        bottom: 0,
        width: "100vw",
      }}
    >
      <div>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "white", mb: { xs: 1, md: 0 }, mr: { md: 2 } }}
        >
          © 2023 Kubekode. All rights reserved.
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: "white" }}>
          Contact us at kubekode@gmail.com
        </Typography>
        <SocialIcons />
      </div>
    </Box>
  );
};

export default Footer;
