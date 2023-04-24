import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "./card.module.css"
const CourseCard = ({ title, image, link, content,index }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <Card>
          <CardMedia component="img" image={image} alt={title} />
          <CardContent>
            <Typography variant="h4" component="h2">
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
