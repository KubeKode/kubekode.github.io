import VideoPlayer from "../../VideoPlayer";
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
        flexDirection: "column",
      }}
    >
      <Intro />
      <VideoPlayer videoLink="https://www.youtube.com/watch?v=p9hyNWXAC1c" />
    </Box>
  );
};
export default Welcome;
