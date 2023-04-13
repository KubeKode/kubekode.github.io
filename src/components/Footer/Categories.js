import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
function Categories() {
  return (
    <div>
      <Grid
        container
        spacing={10}
        sx={{
          marginLeft: 0,
          paddingTop: { xs: "70px", md: 0 },
          paddingBottom: { xs: "50px", md: 0 },
          "& > .MuiGrid-item": {
            padding: { xs: 0, md: "80px 40px 40px 80px" },
          },
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            padding: 0,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Courses
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="https://youtube.com/playlist?list=PL5jQH1Kzu9zrku-uqq-qT1hMzLsYgzW5N"
              target="_blank"
              rel="noreferrer"
            >
              Docker Mastery
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="https://youtube.com/playlist?list=PL5jQH1Kzu9zqraQoXA8rYc3WPB_gnwwJp"
              target="_blank" rel="noreferrer"
            >
              GitHub Actions
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="https://www.youtube.com/playlist?list=PL5jQH1Kzu9zpH-T9-z-cdrUEIsvLLRzUY"
              target="_blank" rel="noreferrer"
            >
              DevOps Projects
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            KubeKode
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="http://kubekode.org/#/about"
              target="_blank" rel="noreferrer"
            >
              About KubeKode
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="http://kubekode.org/#/contact"
              target="_blank" rel="noreferrer"
            >
              Contact Us
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="http://kubekode.org/#/services"
              target="_blank" rel="noreferrer"
            >
              Services
            </a>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            padding: 0,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Resources
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              className={styles.links}
              href="http://kubekode.org/#/services"
              target="_blank" rel="noreferrer"
            >
              Youtube Videos
            </a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Articles
          </Typography>
          <Typography variant="body1" gutterBottom>
            Free Guides
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Categories;
