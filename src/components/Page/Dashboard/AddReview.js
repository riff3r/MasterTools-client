import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (user?.photoURL) {
      data.image = user?.photoURL;
    }

    data.name = user?.displayName;

    console.log(data);

    axios
      .post("https://peaceful-lowlands-36792.herokuapp.com/review", data)
      .then((res) => {
        console.log(res);
        if (res?.data?.acknowledged) {
          reset();
          toast.success("Review Uploaded");
        }
      });
  };
  return (
    <div className="flex items-center justify-center mt-52">
      <div className="card w-96 bg-accent shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Review</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Give us a rating</span>
              </label>
              <select
                {...register("rating")}
                className="select select-primary w-full max-w-xs mb-3"
              >
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
              </select>

              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-primary mb-3"
                placeholder="Review Description"
              ></textarea>
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}

              <div className="card-actions justify-center">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
