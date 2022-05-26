import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Layout/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    refetch,
    data: users,
  } = useQuery("allUser", () =>
    fetch(`https://peaceful-lowlands-36792.herokuapp.com/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <UserRow key={user._id} user={user} sl={i + 1} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
