import React, { Component } from "react";

export const LinkEntry = props => {
  let linkEntryForm = <div />;

  if (props.addLink) {
    linkEntryForm = (
      <div>
        <form>
          <input placeholder="Enter title" />
          <input placeholder="Paste link" />
        </form>
      </div>
    );
  }

  return <div>{mainNav}</div>;
};
