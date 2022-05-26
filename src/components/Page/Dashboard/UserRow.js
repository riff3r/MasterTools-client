import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, sl, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://peaceful-lowlands-36792.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // if (res.status === 403) {
        //   toast.error("Failed To make an admin");
        // }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <td>{sl}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-success btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
