import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const axios = require("axios").default;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/product", data).then((res) => {
      console.log(res);
      if (res?.data?.acknowledged) {
        reset();
        toast.success("Product Uploaded");
      }
    });
  };

  return (
    <div className="flex items-center justify-center mt-52">
      <div class="card w-96 bg-accent shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add a New Product</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              {/* <label class="label">
                <span class="label-text">Give us a rating</span>
              </label> */}

              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Product Title"
                class="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Product Price"
                class="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}

              <textarea
                {...register("description", { required: true })}
                class="textarea textarea-primary mb-3"
                placeholder="Product Description"
              ></textarea>

              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("quantity", { required: true })}
                type="number"
                placeholder="Available Quantity"
                class="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.quantity && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("moq", { required: true })}
                type="number"
                placeholder="Minimum Order Quantity"
                class="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.moq && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("url", { required: true })}
                type="text"
                placeholder="Product Image URL"
                class="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.url && (
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
