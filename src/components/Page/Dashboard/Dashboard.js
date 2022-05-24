import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile min-h-screen">
      <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-5">
        {/* <!-- Page content here --> */}

        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboardSidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="myOrders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="myProfile">My Profile</NavLink>
          </li>
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
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
