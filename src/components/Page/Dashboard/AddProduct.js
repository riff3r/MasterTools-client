import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center mt-52">
      <div class="card w-96 bg-accent shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add Review</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Give us a rating</span>
              </label>
              <select
                {...register("rating")}
                class="select select-primary w-full max-w-xs mb-3"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>

              <textarea
                {...register("description", { required: true })}
                class="textarea textarea-primary mb-3"
                placeholder="Review Description"
              ></textarea>
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}

              <div class="card-actions justify-center">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
