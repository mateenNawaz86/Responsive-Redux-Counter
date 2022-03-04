import React from "react";
import Button from "../UI/Button";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";

import classes from "./Header.module.css";

const Header = () => {
  const showBtn = useSelector((state) => state.authentication.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>
          <h2>Counter</h2>
        </div>
        {showBtn && (
          <div className={classes.logOut}>
            <Button onClick={logoutHandler}>Log Out</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
