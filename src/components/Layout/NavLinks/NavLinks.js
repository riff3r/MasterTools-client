import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
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
    </Fragment>
  );
};

export default NavLinks;
