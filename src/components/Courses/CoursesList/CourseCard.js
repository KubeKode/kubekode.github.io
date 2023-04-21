import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
const CourseCard = ({ title, image, link, content,index }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card>
          <CardMedia component="img" height="200" image={image} alt={title} />
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Grid>
  );
};
export default CourseCard;
