import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { LinkEntry } from "./LinkEntry";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
