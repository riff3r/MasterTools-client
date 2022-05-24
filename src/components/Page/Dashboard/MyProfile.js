import React from "react";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-semibold border-b pb-3 mb-5">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-xl">Name: User Name</h2>
          <h2 className="text-xl">Email: example@email.com</h2>
          <h2 className="text-xl">Phone: 00000000</h2>
          <h2 className="text-xl">Address: Full Address</h2>
          <h2 className="text-xl">Linked in: https://www.linkedin.com/</h2>
        </div>

        <div class="form-control w-full max-w-full">
          <div class="card w-96 bg-accent shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Add Review</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Phone number"
                    class="input input-bordered input-primary w-full max-w-full mb-3"
                  />

                  <textarea
                    {...register("address", { required: true })}
                    class="textarea textarea-primary mb-3"
                    placeholder="Address"
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <input
                    type="text"
                    placeholder="LinkedIn Profile"
                    class="input input-bordered input-primary w-full max-w-full mb-3"
                  />

                  <div class="card-actions justify-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>

                    <button class="btn btn-secondary">Edit</button>
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
