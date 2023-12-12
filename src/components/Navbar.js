import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
        <li>
          <a href="about.asp">Gallery</a>
        </li>
      </ul>
    </div>
  );
}
