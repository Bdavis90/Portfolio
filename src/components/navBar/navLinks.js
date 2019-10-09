import React from "react";

const navLinks = ["About", "Skills", "Projects"];

export default function NavButtons() {
  return (
    <ul className="list-items">
      <a className="nav-links" href="#">
        About
      </a>
      <a className="nav-links" href="#">
        Skills
      </a>
      <a className="nav-links" href="#">
        Projects
      </a>
    </ul>
  );
}
