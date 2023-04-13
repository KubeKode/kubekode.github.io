import ReactPlayer from "react-player";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const Video = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=p9hyNWXAC1c"
      controls={true}
      playIcon={PlayCircleFilledWhiteIcon}
      style={{
        boxShadow: "1px 1px 20px 6px rgb(0 0 0 / 30%)",
      }}
      config={
          {
              youtube:{
                playerVars: { showinfo: 1 ,autoPlay: 1}
              }
          }
      }
    />
  );
};
export default Video;
