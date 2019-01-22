import React, { Component } from "react";
import arrow from "./assets/arrow.png";

export const LinkDisplay = props => {
  let displayedLinks = <div />;
  if (props.links) {
    displayedLinks = props.links.map((link, i) => (
      <div className="displayedLink" key={i}>
        {link.votes}
        <div className="votingBlock">
          <img
            className="upvote"
            src={arrow}
            alt="Upvote"
            onClick={() => props.upvote(link)}
          />
          <img
            className="downvote"
            src={arrow}
            alt="Downvote"
            onClick={() => props.downvote(link)}
          />
        </div>
        <a href={link.link}>
          {link.title}(links to: {link.link})
        </a>
      </div>
    ));
  }
  return <div>{displayedLinks}</div>;
};
