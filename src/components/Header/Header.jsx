import React from "react";
import logo from "../../assets/globe.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="My Travel Journal Logo" />
      <h1>my travel journal.</h1>
    </header>
  );
}
