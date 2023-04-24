import { Grid, Container } from "@mui/material";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";

const CardsList = () => {
  const [courses, setCourses] = useState([]);
  const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=gYPjuEIsMInkIbuuL03uZfJkR32Nr_Qa7u0C2KbFfiE1Qa3vqlsA3-j-73e465jj65SnmjQqCx3Pxz1m7Mz-8VqHfVvj7tWim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLuUF7Z_-YWgZ9b5rXgJdXzfMrEGX0pdamPGVLCcN92de-W0SactNBfoEaVcVxDHGMyfzpMakdoMsZK7EmedLNfacBGtODc9ltz9Jw9Md8uu&lib=MXtcx8t5MfxcgoPV7nkaC8iD3pa3g3bgM"
  const getData = async () => {
    const apiData = await fetch(apiUrl);
    const data = await apiData.json();
    setCourses(data.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <Container maxWidth={{ xs: "xs", lg: "lg" }}>
      <Grid container spacing={2}>
        {courses.map((card, index) => (
          <CourseCard
            title={card.title}
            link={card.link}
            image={card.image}
            content={card.content}
            index={index}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default CardsList;
