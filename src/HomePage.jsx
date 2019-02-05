import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { LinkEntry } from "./LinkEntry";
import { LoginForm } from "./LoginForm";
import { LinkDisplay } from "./LinkDisplay";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addLink: false,
      login: false,
      user: {
        username: "",
        password: ""
      },
      links: [
        {
          votes: 3,
          link: "https://www.britannica.com/animal/humpback-whale",
          title: "Humpbacks are dope",
          voted: "upArrow"
        },
        {
          votes: 1,
          link:
            "https://www.nationalgeographic.com/animals/mammals/g/gray-whale/",
          title: "Grey Whales are clearly the superior whale",
          voted: "downArrow"
        },
        {
          votes: 0,
          link: "www.reddit.com",
          title: "Couldn't you just make a subreddit for this?",
          voted: ""
        },
        {
          votes: 8,
          link: "https://en.wikipedia.org/wiki/Blue_whale",
          title: "The King of Whales (Blue Whale!!!)",
          voted: ""
        }
      ]
    };

    this.onAddLink = this.onAddLink.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onLinkSubmit = this.onLinkSubmit.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onLinkInput = this.onLinkInput.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.onUsernameInput = this.onUsernameInput.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
  }

  componentDidMount() {
    this.orderLinks();
  }

  onAddLink() {
    this.setState({ addLink: true });
  }

  onLogin() {
    this.setState({ login: true });
  }

  onCancel() {
    this.setState({
      addLink: false,
      login: false
    });
  }

  onLinkInput(evt) {
    this.setState({ link: evt.target.value });
  }

  onTitleInput(evt) {
    this.setState({ title: evt.target.value });
  }

  onUsernameInput(evt) {
    this.setState({ username: evt.target.value });
  }

  onPasswordInput(evt) {
    this.setState({ userpass: evt.target.value });
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
    if (this.state.user.username !== "") {
      this.state.links.forEach(function(link, i) {
        if (link.title === votedLink.title && link.link === votedLink.link) {
          linkObj = link;
          let votes = (linkObj.votes += 1);
          linkObj.votes = votes;
          linkPosition = i;
        }
      });
    }
    let removeOldVotes = this.state.links.filter(
      link => link.title !== votedLink.title && link.link !== votedLink.link
    );
    this.setState({ links: [...removeOldVotes, linkObj] });
    this.orderLinks();
  }

  downvote(votedLink) {
    let linkObj = {};
    let linkPosition = 0;
    if (this.state.user.username !== "") {
      this.state.links.forEach(function(link, i) {
        if (link.title === votedLink.title && link.link === votedLink.link) {
          linkObj = link;
          let votes = (linkObj.votes -= 1);
          linkObj.votes = votes;
          linkPosition = i;
        }
      });
    }
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
      votes: 0,
      voted: ""
    };

    let newArray = [newLink, ...this.state.links];

    this.setState(
      {
        links: newArray,
        addLink: false
      },
      () => {
        this.orderLinks();
      }
    );
  }

  onLoginSubmit(evt) {
    evt.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.userpass
    };
    this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <NavBar
          onAddLink={this.onAddLink}
          onLogin={this.onLogin}
          user={this.state.user}
        />
        <LinkEntry
          onLinkSubmit={this.onLinkSubmit}
          addLink={this.state.addLink}
          onCancel={this.onCancel}
          onLinkInput={this.onLinkInput}
          onTitleInput={this.onTitleInput}
        />
        <LoginForm
          login={this.state.login}
          onLoginSubmit={this.onLoginSubmit}
          onUsernameInput={this.onUsernameInput}
          onPasswordInput={this.onPasswordInput}
          onCancel={this.onCancel}
        />
        <LinkDisplay
          links={this.state.links}
          linkVotes={this.state.linkVotes}
          downvote={this.downvote}
          upvote={this.upvote}
        />
      </div>
    );
  }
}
