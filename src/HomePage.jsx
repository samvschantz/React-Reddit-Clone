import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { LinkEntry } from "./LinkEntry";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addLink: false
    };

    this.onAddLink = this.onAddLink.bind(this);
  }

  onAddLink() {
    this.setState({ addLink: true });
  }

  render() {
    return (
      <div>
        <NavBar onAddLink={this.onAddLink} />
        <LinkEntry addLink={this.state.addLink} />
      </div>
    );
  }
}
