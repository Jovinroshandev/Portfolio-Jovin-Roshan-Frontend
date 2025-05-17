import Home from "./components/home";
import About from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";
import VantaBirdsBackground from "./components/VantaBirdsBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { useState } from "react";

export default function App() {
  const [activeBtn, setActiveBtn] = useState("home");

  return (
    <div>
      <BrowserRouter>
        <VantaBirdsBackground />
        <div className="py-3">
          <Navbar activeBtn={activeBtn} />
        </div>
        <Routes>
          <Route path="/" element={<Home setActiveBtn={setActiveBtn} />} />
          <Route path="/about" element={<About setActiveBtn={setActiveBtn} />} />
          <Route path="/project" element={<Project setActiveBtn={setActiveBtn} />} />
          <Route path="/contact" element={<Contact setActiveBtn={setActiveBtn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
