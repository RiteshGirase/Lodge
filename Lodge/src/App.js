import './App.css';
import Brand from './Components.js/Brand';
import Footer from './Components.js/Footer';
import Home from './Components.js/Home';
import Navbar from './Components.js/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Special from './Components.js/Special';
import Contact from './Components.js/Contact';
import About from './Components.js/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Brand" element={<Brand />}></Route >
          <Route path="/Special" element={<Special />} ></Route >
          <Route path="/Contact" element={<Contact />}></Route >
          <Route path="/About" element={<About />}></Route >
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
