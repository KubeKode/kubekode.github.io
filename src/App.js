import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NewFooter from "./components/NewFooter";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
      <NewFooter />
    </Router>
  );
}

export default App;
