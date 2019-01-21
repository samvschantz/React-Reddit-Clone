import React, { Component } from "react";
import whale_logo from "./assets/whale_logo.png";
import plus_sign from "./assets/plus_sign.png";

export const NavBar = props => {
  const mainNav = (
    <nav className="mainNav">
      <img src={whale_logo} alt="Whale Logo" className="whaleLogo" />
      <p className="siteName">whalewhalewhale</p>
      <div className="addLink">
        <img src={plus_sign} alt="Plus sign" className="plusSign" />
        <p>add a link</p>
      </div>
    </nav>
  );
  return <div>{mainNav}</div>;
};
