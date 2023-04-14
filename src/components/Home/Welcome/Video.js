import ReactPlayer from "react-player";
import styles from "./welcome.module.css";
const Video = () => {
  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=p9hyNWXAC1c"
        // playing
        width="100%"
        height="100%"
        style={{
          boxShadow: "1px 1px 20px 6px rgb(0 0 0 / 30%)",
        }}
      />
    </div>
  );
};
export default Video;
