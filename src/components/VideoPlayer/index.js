import ReactPlayer from "react-player";
import styles from "./player.module.css";
const Video = ({videoLink}) => {
  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer
        url={videoLink}
        playing
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
