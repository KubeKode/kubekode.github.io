import { Grid, Container } from "@mui/material";
import CourseCard from "./CourseCard";
const cardsData = [
  {
    title: "Card 1",
    image: "https://source.unsplash.com/random/300x200",
    content: "Lorem ipsum dolor sit amet.",
    link: "",
  },
  {
    title: "Card 2",
    image: "https://source.unsplash.com/random/300x200",
    content: "Consectetur adipiscing elit.",
    link: "",
  },
  {
    title: "Card 3",
    image: "https://source.unsplash.com/random/300x200",
    content: "Sed do eiusmod tempor incididunt.",
    link: "",
  },
  {
    title: "Card 4",
    image: "https://source.unsplash.com/random/300x200",
    content: "Ut labore et dolore magna aliqua.",
    link: "",
  },
];

const CardsList = () => {
  return (
    <Container maxWidth={{ xs: "xs", lg: "lg" }}>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
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
