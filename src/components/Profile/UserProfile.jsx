import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";

import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const isLogout = useSelector((state) => state.authentication.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <section className={classes.profileContainer}>
        <Card>
          <h2>User Profile</h2>
          <Button onClick={logoutHandler}>Logout</Button>
        </Card>
      </section>
    </>
  );
};

export default UserProfile;
