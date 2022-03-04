import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";

import classes from "./Auth.module.css";

const Auth = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPsw, setEnteredPSw] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pswChangeHandler = (event) => {
    setEnteredPSw(event.target.value);
  };

  const isLogin = useSelector((state) => state.authentication.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPsw);
    setEnteredEmail("");
    setEnteredPSw("");

    dispatch(authActions.login());
  };
  return (
    <>
      <div className={classes.auth}>
        <Card>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={emailChangeHandler}
                  value={enteredEmail}
                  autoComplete="off"
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={pswChangeHandler}
                  value={enteredPsw}
                />
              </div>
              <Button disabled={!enteredEmail || !enteredPsw}>Login</Button>
            </form>
          </section>
        </Card>
      </div>
    </>
  );
};

export default Auth;
