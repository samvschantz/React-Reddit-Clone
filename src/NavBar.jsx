import React, { Component } from "react";
import whale_logo from "./whale_logo.png";

export const NavBar = props => {
  const mainNav = (
    <nav className="mainNav">
      <img src={whale_logo} alt="" />
      <p>Whalewhalewhale</p>
    </nav>
  );
  return <div>{mainNav}</div>;
};
