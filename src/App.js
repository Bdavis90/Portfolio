import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
