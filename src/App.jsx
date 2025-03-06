
import Header from "./components/header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero"

import About from "./components/about-us"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App