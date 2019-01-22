import React, { Component } from "react";

export const LinkEntry = props => {
  let LinkEntryForm = <div />;

  if (props.addLink) {
    LinkEntryForm = (
      <div>
        <form className="linkEntry">
          <input placeholder="Enter title" />
          <input placeholder="Paste link" />
        </form>
      </div>
    );
  }

  return <div>{LinkEntryForm}</div>;
};
