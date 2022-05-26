import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://peaceful-lowlands-36792.herokuapp.com/product", data)
      .then((res) => {
        console.log(res);
        if (res?.data?.acknowledged) {
          reset();
          toast.success("Product Uploaded");
        }
      });
  };

  return (
    <div className="flex items-center justify-center mt-52">
      <div className="card w-96 bg-accent shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add a New Product</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* <label className="label">
                <span className="label-text">Give us a rating</span>
              </label> */}

              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Product Title"
                className="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Product Price"
                className="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}

              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-primary mb-3"
                placeholder="Product Description"
              ></textarea>

              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("quantity", { required: true })}
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.quantity && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("moq", { required: true })}
                type="number"
                placeholder="Minimum Order Quantity"
                className="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.moq && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("url", { required: true })}
                type="text"
                placeholder="Product Image URL"
                className="input input-bordered input-primary w-full max-w-xs mb-5"
              />
              {errors.url && (
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

export default AddProduct;
