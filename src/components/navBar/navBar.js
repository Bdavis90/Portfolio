import React from "react";
import NavButtons from "./navLinks";

// const StyledNavBar = styled.div`
//   background: green;
// `;

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <NavButtons />
      </nav>
    </div>
  );
}
