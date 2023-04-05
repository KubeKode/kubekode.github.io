import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
