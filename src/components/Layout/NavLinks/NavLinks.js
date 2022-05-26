import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const NavLinks = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <Fragment>
      <li>
        <NavLink className="rounded-lg" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="rounded-lg" to="blog">
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink className="rounded-lg" to="portfolio">
          Portfolio
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}

      <li>
        {!user ? (
          <Fragment>
            <NavLink to="login">Login</NavLink>
            <NavLink to="signup">Signup</NavLink>
          </Fragment>
        ) : (
          <button className="font-semibold" onClick={logout}>
            Logout
          </button>
        )}
      </li>

      {user && (
        <li>
          <Link to="dashboard/myProfile">Hello, {user.displayName}</Link>
        </li>
      )}
    </Fragment>
  );
};

export default NavLinks;
