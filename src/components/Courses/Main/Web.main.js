import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardMedia } from "@mui/material";
import maingif from "../../../assets/aboutmain.png";
import styles from "./main.module.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FullMain = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        height: "calc(100vh - 175px)",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div className={styles.child}>
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          animateOut="animate__bounceOutLeft"
          initiallyVisible={true}
          duration={3}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "inherit",
              borderBottom: "6px solid #143f84",
            }}
          >
            Courses
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#a3b3bd",
            }}
          >
            <ul>
              <li>
                Master in-demand tech skills for free with Kubekode's diverse
                range of courses.
              </li>
              <li>
                Take your career to the next level with hands-on tutorials in
                DevOps, Web Development, and Programming.
              </li>
              <li>
                Learn from industry experts and never pay a dime with Kubekode's
                free courses.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              color: "inherit",
            }}
          >
            $0/month
          </Typography>
          <Button
            component={Link}
            to="/courses"
            sx={{
              my: 2,
              color: "white",
              backgroundColor: "#2f74e5",
              borderRadius: "20px",
              fontWeight: "bolder",
            }}
          >
            Explore courses
          </Button>
        </AnimationOnScroll>
      </div>

      <div className={styles.child}>
        <AnimationOnScroll
          animateIn="animate__bounceInRight"
          animateOut="animate__bounceOutRight"
          initiallyVisible={true}
          duration={3}
        >
          <CardMedia
            component="img"
            image={maingif}
            alt="Image"
            sx={{
              boxShadow: "none",
            }}
          />
        </AnimationOnScroll>
      </div>
    </Box>
  );
};

export default FullMain;
