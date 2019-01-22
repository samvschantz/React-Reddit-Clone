import React, { Component } from "react";
import { Arrow } from "./assets/arrow.png";

export const LinkDisplay = props => {
  let displayedLinks = <div />;
  console.log(props);
  console.log(props.links);
  if (props.links) {
    displayedLinks = props.links.map((link, i) => (
      <div className="displayedLink" key={i}>
        <div className="votingBlock">
          <img className="upvote" src="" alt="" />
          <img className="downvote" src="" alt="" />
        </div>
        <a>{link.title}</a>
      </div>
    ));
  }
  return <div>{displayedLinks}</div>;
};
