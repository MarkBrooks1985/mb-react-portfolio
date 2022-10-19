import React from "react";
import About from "./about";
import Work from "./Work";
import Contact from "./Contact";

export default function Table() {
  return (
    <table className="table-style">
      <tbody>
        <About />
        <Work />
        <Contact />
      </tbody>
    </table>
  );
}
