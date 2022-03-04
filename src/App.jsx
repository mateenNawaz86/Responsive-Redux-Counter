import React from "react";
import Auth from "./components/Auth/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header/Header";
import UserProfile from "./components/Profile/UserProfile";

import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
