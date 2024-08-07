import React from "react";
import { Link } from "react-scroll";

import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <div className="links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="howItWorks" smooth={true} duration={500}>
              How it works
            </Link>
          </li>
          <li>
            <Link to="results" smooth={true} duration={500}>
              Results
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
        </div>
        <div>
          <Link id="getInTouch" to="get-in-touch" smooth={true} duration={500}>
            Get in touch
          </Link>
        </div>
      </ul>
    </nav>
  );
}
