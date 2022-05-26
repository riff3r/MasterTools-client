import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ order, setDeleteOrder, refetch }) => {
  const handleDeleteOrder = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/order/${id}`).then((res) => {
      console.log(res);
      if (res.data.deletedCount > 0) {
        setDeleteOrder(null);
        refetch();
        toast.error("Your Order has been Canceled");
      }
    });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label for="delete-confirm-modal" class="btn modal-button">
        open modal
      </label> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text text-red-500">
            Do you want to cancel this order?
          </h3>
          <p class="py-4">Once you delete the order it's can't be undo!</p>
          <div class="modal-action">
            <label
              onClick={() => handleDeleteOrder(order)}
              class="btn btn-error"
            >
              Delete
            </label>
            <label for="delete-confirm-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
