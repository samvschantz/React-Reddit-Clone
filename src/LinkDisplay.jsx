import React, { Component } from "react";
import arrow from "./assets/arrow.png";
import upArrow from "./assets/upArrow.png";
import downArrow from "./assets/downArrow.png";

export const LinkDisplay = props => {
  let displayedLinks = <div />;
  if (props.links) {
    displayedLinks = props.links.map((link, i) => (
      <div className="displayedLink" key={i}>
        <div className="votingBlock">
          <img
            className="upvote"
            src={
              link.voted === "upArrow"
                ? require(`./assets/${link.voted}.png`)
                : require(`./assets/arrow.png`)
            }
            alt="Upvote"
            onClick={() => props.upvote(link)}
          />
          <div className="numVotes" onClick={() => props.unvote(link)}>
            {link.votes}
          </div>
          <img
            className="downvote"
            src={
              link.voted === "downArrow"
                ? require(`./assets/${link.voted}.png`)
                : require(`./assets/arrow.png`)
            }
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
