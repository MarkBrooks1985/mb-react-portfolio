import React from "react";

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

export default function About() {
  return (
    <tr>
      <td style={styling.table1} className="about-title">
        <span id="about-me">
          <h1>About Me</h1>
        </span>
      </td>
      <td style={styling.table2}>&nbsp;</td>
      <td style={styling.table3} className="about-me">
        <p>
          Hey there, welcome to my portfolio page. My name is Mark Brooks. I am
          at this point a beginner coder who is still very much learning and at
          this stage I just view this as an interesting hobby. I hope you have a
          look around and enjoy what you see!
        </p>
      </td>
    </tr>
  );
}
