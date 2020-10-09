import React from "react";

import classes from "./Form.module.css";

const form = (props) => {
  let form = (
    <React.Fragment>
      <input
        onChange={props.formInput}
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <input
        onChange={props.formInput}
        type="password"
        name="password"
        placeholder="Your password"
        required
      />
    </React.Fragment>
  );
  if (!props.isSignUp) {
    form = (
      <React.Fragment>
        <input
          onChange={props.formInput}
          type="name"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          onChange={props.formInput}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          onChange={props.formInput}
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
      </React.Fragment>
    );
  }

  return (
    <form action="/" method="POST" className={classes.Form}>
      {form}
    </form>
  );
};

export default form;
