import { Typography } from "@mui/material";
const Intro = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "inherit",
          padding: "20px",
        }}
      >
        Welcome to
        <span
          style={{
            background: "linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          {" "}
          KubeKode
        </span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.1rem",
          color: "inherit",
          padding: "20px",
          width: { xs: "90vw", md: "75vw" },
        }}
      >
        At kubekode, we believe that the best way to become a proficient
        developer is by practicing real-world projects and building a strong
        portfolio. If you're tired of following tutorials and not knowing how to
        apply your skills in practical settings, kubekode can help you master
        the programming skills that matter most in today's job market. Our
        platform offers a variety of hands-on projects and challenges that will
        help you solidify your knowledge and gain the confidence you need to
        succeed in your career. With kubekode, you'll be able to take your
        skills to the next level and stand out from the competition.
      </Typography>
    </div>
  );
};
export default Intro;
