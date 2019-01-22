import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { LinkEntry } from "./LinkEntry";
import { LinkDisplay } from "./LinkDisplay";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addLink: false,
      links: [
        {
          votes: 3,
          link: "https://www.britannica.com/animal/humpback-whale",
          title: "Humpback"
        },
        {
          votes: 1,
          link:
            "https://www.nationalgeographic.com/animals/mammals/g/gray-whale/",
          title: "Grey Whale"
        },
        {
          votes: 0,
          link: "www.reddit.com",
          title: "Couldn't you just make a subreddit for this?"
        }
      ]
    };

    this.onAddLink = this.onAddLink.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onLinkSubmit = this.onLinkSubmit.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onLinkInput = this.onLinkInput.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
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

  orderLinks() {
    let sortedArray = this.state.links.sort(function(a, b) {
      return b.votes - a.votes;
    });
    this.setState({ links: sortedArray });
  }
  upvote(votedLink) {
    let linkObj = {};
    let linkPosition = 0;
    this.state.links.forEach(function(link, i) {
      if (link.title === votedLink.title && link.link === votedLink.link) {
        linkObj = link;
        let votes = (linkObj.votes += 1);
        linkObj.votes = votes;
        linkPosition = i;
      }
    });
    let removeOldVotes = this.state.links.filter(
      link => link.title !== votedLink.title && link.link !== votedLink.link
    );
    this.setState({ links: [...removeOldVotes, linkObj] });
    this.orderLinks();
  }

  downvote(votedLink) {
    let linkObj = {};
    let linkPosition = 0;
    this.state.links.forEach(function(link, i) {
      if (link.title === votedLink.title && link.link === votedLink.link) {
        linkObj = link;
        let votes = (linkObj.votes -= 1);
        linkObj.votes = votes;
        linkPosition = i;
      }
    });
    let removeOldVotes = this.state.links.filter(
      link => link.title !== votedLink.title && link.link !== votedLink.link
    );
    this.setState({ links: [...removeOldVotes, linkObj] });
    this.orderLinks();
  }

  onLinkSubmit(evt) {
    evt.preventDefault();
    const newLink = {
      title: this.state.title,
      link: this.state.link,
      votes: 0
    };

    let newArray = [newLink, ...this.state.links];

    this.setState({
      links: newArray,
      addLink: false
    });
    // this.orderLinks();
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
        <LinkDisplay
          links={this.state.links}
          downvote={this.downvote}
          upvote={this.upvote}
        />
      </div>
    );
  }
}
