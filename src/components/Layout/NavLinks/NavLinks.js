import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading";
import { signOut } from "firebase/auth";

const NavLinks = () => {
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {!user ? (
          <NavLink to="login">Login</NavLink>
        ) : (
          <button onClick={() => signOut(auth)}>Logout</button>
        )}
      </li>
    </Fragment>
  );
};

export default NavLinks;
