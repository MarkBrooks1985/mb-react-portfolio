import React from "react";
import Nibbles from "../assets/images/nibbles.png";
import Debug from "../assets/images/debug.png";
import CodeIt from "../assets/images/codeIt.png";
import Coming from "../assets/images/comingsoon.png";

const styling = {
  table1: {
    width: 70,
    paddingR: 10,
  },
  table2: {
    width: 6,
    backgroundColor: "var(--border-color)",
  },
  table3: {
    paddingLeft: 10,
  },
};

export default function Work() {
  return (
    <tr>
      <td style={styling.table1} className="about-title">
        <span id="about-work">
          <h1>Work</h1>
        </span>
      </td>
      <td style={styling.table2}>&nbsp;</td>
      <td style={styling.table3} className="about-me">
        <a href="https://rouge86.github.io/Nibbles/">
          <img className="img-container" src={Nibbles} alt="Nibbles" />
        </a>
        <br />
        <a href="https://markbrooks1985.github.io/Horiseon-Example-challenge-Demo/">
          <img className="img-container" src={Debug} alt="Work2" />
        </a>
        <a href="https://mysterious-journey-75550.herokuapp.com/">
          <img className="img-container" src={CodeIt} alt="Work3" />
        </a>
        <br />
        <a href="#">
          <img className="img-container" src={Coming} alt="Work4" />
        </a>
        <a href="#">
          <img className="img-container" src={Coming} alt="Work5" />
        </a>
      </td>
    </tr>
  );
}
