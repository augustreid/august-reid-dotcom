import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/"}>
          <h1>August Reid</h1>
        </Link>
      </header>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
