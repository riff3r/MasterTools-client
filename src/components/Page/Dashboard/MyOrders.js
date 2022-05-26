import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../../Layout/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteConfirmModal from "./DeleteConfirmModal";

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
    fetch(`http://localhost:5000/order/${user?.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

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

                  <label
                    for="delete-confirm-modal"
                    className="btn btn-error btn-xs"
                    onClick={() => {
                      setDeletingOrderId(order._id);
                      setDeleteOrder(true);
                    }}
                  >
                    Cancel
                  </label>
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
