
import Header from "./components/header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero"
import About from "./components/about-us"
import Works from "./components/works"
import Blog from "./components/blog"
import Contact from "./components/contact"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App