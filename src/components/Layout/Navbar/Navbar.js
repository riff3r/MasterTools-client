import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  return (
    <div class="drawer drawer-end bg-white">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="container mx-auto">
          <div class="w-full navbar py-6">
            {user && (
              <label
                htmlFor="dashboardSidebar"
                class="btn btn-square btn-ghost drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
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

            <Link to="/" class="flex-1 px-2 mx-2 text-2xl font-semibold">
              <span className="text-primary">Master</span>Tools
            </Link>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal gap-x-5 font-semibold">
                {/* <!-- Navbar menu content here --> */}
                <NavLinks />
              </ul>
            </div>
            <div class="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
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

      <div class="drawer-side">
        <label htmlFor="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
