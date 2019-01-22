import React, { Component } from "react";

export const LinkEntry = props => {
  let LinkEntryForm = <div />;
  console.log(props);
  if (props.addLink) {
    LinkEntryForm = (
      <div>
        <form>
          <input placeholder="Enter title" />
          <input placeholder="Paste link" />
        </form>
      </div>
    );
  }

  return <div>{LinkEntryForm}</div>;
};
