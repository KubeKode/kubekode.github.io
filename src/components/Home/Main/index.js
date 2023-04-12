import Toolbar from "@mui/material/Toolbar";
import WebMain from "./Web.main";
import MobileMain from "./Mobile.main";

const Main = () => {
  return (
    <Toolbar disableGutters>
      <WebMain />
      <MobileMain />
    </Toolbar>
  );
};

export default Main;
