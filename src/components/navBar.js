import React from "react";

// const StyledNavBar = styled.div`
//   background: green;
// `;

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
