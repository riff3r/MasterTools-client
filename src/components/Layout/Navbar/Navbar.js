import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="drawer drawer-end bg-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="container mx-auto">
          <div className="w-full navbar py-6">
            {user && (
              <label
                htmlFor="dashboardSidebar"
                className="btn btn-square btn-ghost drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            )}

            <Link to="/" className="flex-1 px-2 mx-2 text-2xl font-semibold">
              <span className="text-primary">Master</span>Tools
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-5 font-semibold">
                {/* <!-- Navbar menu content here --> */}
                <NavLinks />
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Page content here --> */}

        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
