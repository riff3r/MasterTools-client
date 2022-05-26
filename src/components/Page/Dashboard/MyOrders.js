import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../../Layout/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);
  const {
    isLoading,
    error,
    refetch,
    data: myOrders,
  } = useQuery("myOrders", () =>
    fetch(
      `https://peaceful-lowlands-36792.herokuapp.com/order/${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(myOrders);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Tools Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
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
                  {!order.paid ? (
                    <Link
                      to={`/dashboard/payment/${order._id}`}
                      className="btn btn-success btn-xs mr-2"
                    >
                      Pay
                    </Link>
                  ) : (
                    <button className="btn btn-primary btn-xs mr-2">
                      Paid
                    </button>
                  )}
                </td>
                <td>
                  {order.transactionId && (
                    <div>
                      TransactionID: <span>{order.transactionId}</span>
                    </div>
                  )}

                  {!order.paid && (
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

export default MyOrders;
