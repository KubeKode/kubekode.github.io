import { Grid, IconButton } from "@material-ui/core";
const IconButtonItem = ({ link, Icon }) => {
  return (
    <Grid item>
      <IconButton href={link} target="_blank">
        <Icon sx={{ color: "white" }} />
      </IconButton>
    </Grid>
  );
};
export default IconButtonItem;
