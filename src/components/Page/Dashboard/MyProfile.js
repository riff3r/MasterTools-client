import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Layout/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    isLoading,
    error,
    refetch,
    data: myProfile,
  } = useQuery("myProfile", () =>
    fetch(
      `https://peaceful-lowlands-36792.herokuapp.com/user/${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(myProfile);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(
        `https://peaceful-lowlands-36792.herokuapp.com/user/${myProfile?.email}`,
        data
      )
      .then((res) => {
        //   console.log(res.data.token);
        const accessToken = res.data.token;

        localStorage.setItem("accessToken", accessToken);

        refetch();
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold border-b pb-3 mb-5">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-xl">Name: {myProfile.name}</h2>
          <h2 className="text-xl">Email: {myProfile.email}</h2>

          {myProfile.number && (
            <h2 className="text-xl">Phone: {myProfile.number}</h2>
          )}

          {myProfile.address && (
            <h2 className="text-xl">Address: {myProfile.address}</h2>
          )}

          {myProfile.linkedin && (
            <h2 className="text-xl">LinkedIn: {myProfile.linkedin}</h2>
          )}
        </div>

        <div className="form-control w-full max-w-full">
          <div className="card md:w-96 bg-accent shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Add more information</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("number", { required: true })}
                    type="text"
                    placeholder="Phone number"
                    className="input input-bordered input-primary w-full max-w-full mb-3"
                  />
                  {errors.number && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <textarea
                    {...register("address", { required: true })}
                    className="textarea textarea-primary mb-3"
                    placeholder="Address"
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <input
                    {...register("linkedin")}
                    type="text"
                    placeholder="LinkedIn Profile"
                    className="input input-bordered input-primary w-full max-w-full mb-3"
                  />

                  <div className="card-actions justify-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
