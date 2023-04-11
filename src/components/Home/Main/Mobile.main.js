import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import maingif from "../../../assets/Snap.png";
import styles from "./mobile.main.module.css";
const MobileMain = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        height: "calc(100vh - 175px)",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div className={styles.child}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
          }}
        >
          Empowering <span style={{ color: "rgb(127 176 255)" }}>Minds </span>
          <br />
          <span style={{ color: "rgb(127 176 255)" }}>Transforming</span>{" "}
          Businesses
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#a3b3bd",
            fontSize: "14px",
            margin: "12px 0 0 0",
          }}
        >
          Showcase your skills with practical development experience and land
          the coding career of your dreams
        </Typography>
      </div>
      <div className={styles.child}>
        <CardMedia
          component="img"
          image={maingif}
          alt="Image"
          sx={{
            boxShadow:
              "3px 2px 10px 4px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 20px 0px rgba(0,0,0,0.12)",
          }}
        />
      </div>
    </Box>
  );
};

export default MobileMain;
