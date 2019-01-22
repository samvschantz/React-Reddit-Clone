import React, { Component } from "react";
import cancel_button from "./assets/cancel_button.png";

export const LinkEntry = props => {
  let LinkEntryForm = <div />;
  if (props.addLink) {
    LinkEntryForm = (
      <div className="linkEntry">
        <div className="cancelDiv" onClick={() => props.onCancel()}>
          <img src={cancel_button} />
        </div>
        <form onSubmit={evt => props.onLinkSubmit(evt)}>
          <input
            placeholder="Enter title"
            onChange={evt => props.onTitleInput(evt)}
          />
          <input
            placeholder="Paste link"
            onChange={evt => props.onLinkInput(evt)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return <div>{LinkEntryForm}</div>;
};
