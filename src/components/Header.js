import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <span className="me">
          {" "}
          <img
            className="avatar"
            src="../src/assets/images/avatar.png"
            alt="Me"
          />{" "}
          Mark Brooks' Portfolio
        </span>
        <span className="nav-links">
          <a href="#about-me">About Me</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#about-work">Work</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#about-contact">Contact Me</a>&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <a href="#">Resume</a> */}
        </span>
      </nav>
    </header>
  );
}
