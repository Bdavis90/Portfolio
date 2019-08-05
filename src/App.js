import React from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import AboutMe from "./components/aboutMe/aboutMe";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
