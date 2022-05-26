import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  order,
  setDeleteOrder,
  refetch,
  url = "order",
}) => {
  const handleDeleteOrder = (id) => {
    console.log(id);
    axios
      .delete(`https://peaceful-lowlands-36792.herokuapp.com/${url}/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          setDeleteOrder(null);
          refetch();
          toast.error(`${url} has been deleted`);
        }
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label htmlFor="delete-confirm-modal" className="btn modal-button">
        open modal
      </label> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text text-red-500">
            Do you want to delete this {url}?
          </h3>
          <p className="py-4">Once you delete the {url} it's can't be undo!</p>
          <div className="modal-action">
            <label
              onClick={() => handleDeleteOrder(order)}
              className="btn btn-error"
            >
              Delete
            </label>
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
