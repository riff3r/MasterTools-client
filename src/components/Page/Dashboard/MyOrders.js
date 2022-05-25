import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../../Layout/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    error,
    refetch,
    data: myOrders,
  } = useQuery("myOrders", () =>
    fetch(`http://localhost:5000/order/${user?.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteOrder = (id) => {
    axios.delete(`http://localhost:5000/order/${id}`).then((res) => {
      console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.error("Order Canceled");
      }
    });
  };

  console.log(myOrders);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Tools Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>{order.title}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <button className="btn btn-success btn-xs mr-2">Pay</button>

                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-error btn-xs "
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
