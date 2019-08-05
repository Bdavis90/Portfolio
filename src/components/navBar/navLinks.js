import React from "react";

const navLinks = ["About", "Skills", "Projects"];

export default function NavButtons() {
  return navLinks.map(link => {
    return <li>{link}</li>;
  });
}
