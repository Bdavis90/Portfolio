import React from "react";
import NavButtons from "./navLinks";

// const StyledNavBar = styled.div`
//   background: green;
// `;

export default function NavBar() {
  return (
    <div className="nav-container">
      <ul className="list-items">
        <NavButtons />
      </ul>
    </div>
  );
}
