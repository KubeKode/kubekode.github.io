import Video from "./Video";
import Intro from "./Intro";
import { Box } from "@mui/material";
const Welcome = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Intro />
      <Video />
    </Box>
  );
};
export default Welcome;
