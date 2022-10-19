import React from "react";

export default function About() {
  return (
    <section>
      <tr>
        <td style="width:70px;padding-right:10px;" class="about-title">
          <span id="about-me">
            <h1>About Me</h1>
          </span>
        </td>
        <td style="width:6px;background-color:var(--border-color);">&nbsp;</td>
        <td style="padding-left:10px;" class="about-me">
          <p>
            Hey there, welcome to my portfolio page. My name is Mark Brooks. I
            am at this point a beginner coder who is still very much learning
            and at this stage I just view this as an interesting hobby. I hope
            you have a look around and enjoy what you see!
          </p>
        </td>
      </tr>
    </section>
  );
}
