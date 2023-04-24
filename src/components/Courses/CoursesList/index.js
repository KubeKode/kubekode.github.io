import { Grid, Container } from "@mui/material";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";

const CardsList = () => {
  const [courses, setCourses] = useState([]);
  const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=syVv518n5OwgpgcHSzl9_SEMg4Li2OYHfISsg_aQ65Fi-ttE1BkygCJAwMSNMpMpgfs3AhkmnDcwoUclVk3zyUwghW63uwWEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGs7kWtsxdIhbd-yUAbNSQfBreM10RyclkMmgwhBJZt9X32ioCho-rBl4JggHsl0JDakBIU3ZCfQSUy7J_qfNpLnMvPOaICEvQ&lib=MXtcx8t5MfxcgoPV7nkaC8iD3pa3g3bgM"
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
            link={card.course.link}
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
