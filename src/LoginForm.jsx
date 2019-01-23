import React, { Component } from "react";
import cancel_button from "./assets/emptyx.png";

export const LoginForm = props => {
  let LoginEntryForm = <div />;
  if (props.login) {
    LoginEntryForm = (
      <div className="bodyObscure">
        <div className="linkEntry">
          <div className="cancelDiv" onClick={() => props.onCancel()}>
            <img src={cancel_button} />
          </div>
          <p className="gentleReminder">
            Log in (Any usr/pwd combo will work this is a dummy form)
          </p>
          <form onSubmit={evt => props.onLoginSubmit(evt)}>
            <input
              placeholder="Username"
              onChange={evt => props.onUsernameInput(evt)}
            />
            <input
              placeholder="Password"
              onChange={evt => props.onPasswordInput(evt)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  return <div>{LoginEntryForm}</div>;
};
