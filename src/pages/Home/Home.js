import Data from "./data";
import Main from "../../components/Home/Main";
import Welcome from "../../components/Home/Welcome";
import "./Home.css"
const HomePage = () => {
  return (
    <div className="homepagedata">
      <Main />
      <Welcome />
      <Data />
      
    </div>
  );
};
export default HomePage;
