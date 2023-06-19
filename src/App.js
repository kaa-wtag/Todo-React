import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
