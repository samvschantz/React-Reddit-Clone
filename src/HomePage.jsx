import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { LinkEntry } from "./LinkEntry";
import { LinkDisplay } from "./LinkDisplay";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addLink: false,
      links: []
    };

    this.onAddLink = this.onAddLink.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onLinkSubmit = this.onLinkSubmit.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onLinkInput = this.onLinkInput.bind(this);
  }

  onAddLink() {
    this.setState({ addLink: true });
  }

  onCancel() {
    this.setState({ addLink: false });
  }

  onLinkInput(evt) {
    this.setState({ link: evt.target.value });
  }

  onTitleInput(evt) {
    this.setState({ title: evt.target.value });
  }

  onLinkSubmit(evt) {
    evt.preventDefault();
    const newLink = {
      title: this.state.title,
      link: this.state.link
    };

    let newArray = [newLink, ...this.state.links];

    this.setState({ links: newArray });
  }

  render() {
    return (
      <div>
        <NavBar onAddLink={this.onAddLink} />
        <LinkEntry
          onLinkSubmit={this.onLinkSubmit}
          addLink={this.state.addLink}
          onCancel={this.onCancel}
          onLinkInput={this.onLinkInput}
          onTitleInput={this.onTitleInput}
        />
        <LinkDisplay links={this.state.links} />
      </div>
    );
  }
}
