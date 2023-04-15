import { Typography } from "@mui/material";
import SocialIcons from "../SocialBar";
import styles from "./Footer.module.css";
const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.copyright_left_child}>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#cac6c6",
            mb: { xs: 1, md: 0 },
            mr: { md: 2 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © 2023 Kubekode. All rights reserved. | Contact us at
          kubekode@gmail.com
        </Typography>
      </div>
      <div className={styles.copyright_right_child}>
        <SocialIcons styles={{ width: "none" }} />
      </div>
    </div>
  );
};
export default Copyright;
