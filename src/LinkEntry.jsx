import React, { Component } from "react";
import cancel_button from "./assets/emptyx.png";

export const LinkEntry = props => {
  let LinkEntryForm = <div />;
  if (props.addLink) {
    LinkEntryForm = (
      <div className="bodyObscure">
        <div className="linkEntry">
          <div className="cancelDiv" onClick={() => props.onCancel()}>
            <img src={cancel_button} />
          </div>
          <p className="gentleReminder">
            Please only post whales and whale-related content. NO FISH!
          </p>
          <form onSubmit={evt => props.onLinkSubmit(evt)}>
            <input
              placeholder="Enter a title for your content"
              onChange={evt => props.onTitleInput(evt)}
            />
            <input
              placeholder="Paste link to content here"
              onChange={evt => props.onLinkInput(evt)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  return <div>{LinkEntryForm}</div>;
};
