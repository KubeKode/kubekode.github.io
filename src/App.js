import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/courses" Component={Courses} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  );
}

export default App;
