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
  input1: {
    height: 200,
  },
};

export default function Contact() {
  return (
    <tr>
      <td style={styling.table1} className="about-title">
        <span id="about-contact">
          <h1>Contact Me</h1>
        </span>
      </td>
      <td style={styling.table2}>&nbsp;</td>
      <td style={styling.table3} className="about-me">
        <div className="container">
          <form action="action_page.php">
            <label for="fname">Full Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fullname"
              placeholder="Your Full name.."
            />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
            <br />
            <label for="subject">Subject</label>
            <br />
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={styling.input1}
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </td>
    </tr>
  );
}
