import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
