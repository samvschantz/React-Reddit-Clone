import React, { Component } from "react";
import arrow from "./assets/arrow.png";

export const LinkDisplay = props => {
  let displayedLinks = <div />;
  if (props.links) {
    displayedLinks = props.links.map((link, i) => (
      <div className="displayedLink">
        <div className="votingBlock">
          <img
            className="upvote"
            src={arrow}
            alt="Upvote"
            onClick={() => props.upvote(link)}
          />
          <div className="numVotes">{link.votes}</div>
          <img
            className="downvote"
            src={arrow}
            alt="Downvote"
            onClick={() => props.downvote(link)}
          />
        </div>
        <a href={link.link}>
          <div className="linkInfo" key={i}>
            <div className="linkTitle">{link.title}</div>
          </div>
          <div className="linkLink">links to: {link.link}</div>
        </a>
      </div>
    ));
  }
  return <div>{displayedLinks}</div>;
};
