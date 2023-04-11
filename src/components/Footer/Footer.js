import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0b0e13',
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    position: 'relative',
    bottom: 0
  },
  link: {
    margin: theme.spacing(0, 1),
  },
}));

function FooterPage() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="body1" color="textSecondary" align="center">
          © 2023 My Website
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Built with React and Material UI
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="#" className={classes.link}>
            Privacy Policy
          </Link>
          <Link href="#" className={classes.link}>
            Terms of Use
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="#" className={classes.link}>
            <GitHubIcon />
          </Link>
          <Link href="#" className={classes.link}>
            <TwitterIcon />
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default FooterPage;
