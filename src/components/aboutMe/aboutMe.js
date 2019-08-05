import React from "react";
import AboutDescription from "./aboutDescrpition";
import ContactInfo from "./aboutContact";

export default function AboutMe() {
  return (
    <div className="about-container">
      <header>
        <h1>About Me</h1>
      </header>
      <h2>Brandon Davis</h2>
      <AboutDescription />
      <ContactInfo />
    </div>
  );
}
