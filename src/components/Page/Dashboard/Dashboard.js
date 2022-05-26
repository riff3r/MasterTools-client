import React, { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile min-h-screen">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-5">
        {/* <!-- Page content here --> */}

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {/* <!-- Sidebar content here --> */}

          {!admin && (
            <Fragment>
              <li>
                <NavLink to="myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="addReview">Add Review</NavLink>
              </li>
            </Fragment>
          )}

          <li>
            <NavLink to="myProfile">My Profile</NavLink>
          </li>

          {admin && (
            <Fragment>
              <li>
                <NavLink to="manageOrders">Manage Orders</NavLink>
              </li>
              <li>
                <NavLink to="manageProducts">Manage Products</NavLink>
              </li>
              <li>
                <NavLink to="addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="makeAdmin">Make Admin</NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
