import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Layout/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageAllOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("https://peaceful-lowlands-36792.herokuapp.com/order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleStatus = (order) => {
    console.log(order);
    const quantityUpdate = {
      productId: order.productId,
      quantity: order.quantity,
    };
    fetch(`https://peaceful-lowlands-36792.herokuapp.com/status/${order._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(quantityUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Order shipped successfully");
        }
      });
  };

  console.log(orders);

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-semibold border-b pb-3 mb-5">
          Manage orders
        </h1>

        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Customer</th>
              <th>Customer Email</th>
              <th>Tools Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <th>{order.userName}</th>
                <th>{order.userEmail}</th>
                <td>{order.title}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.status === "shipped" ? (
                    <span className="btn btn-xs btn-info">shipped</span>
                  ) : (
                    <span className="btn btn-xs btn-accent">Pending</span>
                  )}
                </td>
                <td>
                  {!order.paid ? (
                    <span className="btn btn-xs btn-accent">Pending</span>
                  ) : (
                    <span className="btn btn-xs btn-success">Paid</span>
                  )}
                </td>
                <td>
                  {!order.paid ? (
                    <label
                      htmlFor="delete-confirm-modal"
                      className="btn btn-error btn-xs"
                      onClick={() => {
                        setDeletingOrderId(order._id);
                        setDeleteOrder(true);
                      }}
                    >
                      Cancel
                    </label>
                  ) : (
                    <button
                      onClick={() => handleStatus(order)}
                      className="btn btn-success btn-xs mr-2"
                      disabled={order.status === "shipped"}
                    >
                      Shipped
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteConfirmModal
          setDeleteOrder={setDeleteOrder}
          order={deletingOrderId}
          deleteOrder={deleteOrder}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageAllOrders;
