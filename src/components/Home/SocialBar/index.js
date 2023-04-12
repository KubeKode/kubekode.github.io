import { Grid } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButtonItem from "./Icon.button";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const socials = [
  { icon: LinkedInIcon, link: "https://www.linkedin.com/company/kubekode/" },
  { icon: TwitterIcon, link: "https://twitter.com/kubekode_org" },
  { icon: InstagramIcon, link: "https://www.instagram.com/kubekode/" },
  {icon: GitHubIcon, link: "https://github.com/kubekode"},
  {icon: YouTubeIcon, link: "https://www.youtube.com/@kubekode"},
];
const SocialIcons = () => {
  return (
    <Grid container>
      {socials.map(({ icon, link }) => (
        <IconButtonItem link={link} Icon={icon} />
      ))}
    </Grid>
  );
};

export default SocialIcons;
