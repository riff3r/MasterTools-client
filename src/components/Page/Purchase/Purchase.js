import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Layout/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  // const [orderStatus, setOrderStatus] = useState(true);

  const { id } = useParams();

  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery("products", () =>
    fetch(`https://peaceful-lowlands-36792.herokuapp.com/product/${id}`).then(
      (res) => res.json()
    )
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const currentOrderQuantity = watch("quantity");

  // console.log(product);
  // console.log(currentOrderQuantity);

  const onSubmit = (data) => {
    data.status = "pending";
    const productInfo = {
      title: product.title,
      productId: product._id,
      quantity: +product.quantity,
      totalPrice: +product.price * +data.quantity,
    };
    const userInfo = {
      userName: user.displayName,
      userEmail: user.email,
    };

    const order = {
      ...productInfo,
      ...data,
      ...userInfo,
    };

    console.log(order);
    axios
      .post(`https://peaceful-lowlands-36792.herokuapp.com/order`, order)
      .then((res) => {
        if (res.data.acknowledged) {
          reset();
          toast.success("You order placed");
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img width={300} src={product?.url} alt="" />
              <h1 className="text-5xl font-bold">{product?.title}</h1>
              <p className="py-6">{product?.description}</p>
              <p>minimum order quantity: {product?.moq}</p>
              <p>available quantity: {product?.quantity}</p>
              <p>Unit price: {product?.price}</p>
              <p>
                Total Price:{" "}
                {!currentOrderQuantity
                  ? product?.price * product?.moq
                  : product?.price * currentOrderQuantity}
              </p>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Order Confirmation</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div className="form-control w-full max-w-xs mb-5">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>

                    <input
                      type="number"
                      className="input input-bordered input-primary w-full max-w-xs"
                      {...register("quantity", {
                        validate: {
                          minOrder: (value) =>
                            value >= +product?.moq ||
                            "Your order quantity is lower then minimum order quantity ",
                          maxOrder: (value) =>
                            value <= +product?.quantity ||
                            "Your order quantity is higher then available quantity ",
                        },
                      })}
                      placeholder={product?.moq}
                    />

                    {(errors.quantity?.type === "minOrder" ||
                      errors.quantity?.type === "maxOrder") && (
                      <label className="label">
                        <span className="label-text text-red-500">
                          {errors?.quantity?.message}
                        </span>
                      </label>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="User Name"
                    className="input input-bordered input-primary w-full max-w-xs mb-5"
                    value={user.displayName}
                    disabled
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs mb-5"
                    value={user.email}
                    disabled
                  />

                  <div className="form-control w-full max-w-xs">
                    <input
                      type="number"
                      placeholder="Phone"
                      className="input input-bordered input-primary w-full max-w-xs mb-5"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Please input your phone number",
                        }, // JS only: <p>error message</p> TS only support string
                      })}
                    />

                    {errors.phone?.type === "required" && (
                      <label className="label">
                        <span className="label-text text-red-500">
                          {errors?.phone?.message}
                        </span>
                      </label>
                    )}
                  </div>

                  <textarea
                    className="textarea textarea-primary w-full"
                    placeholder="Address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Please input your address",
                      }, // JS only: <p>error message</p> TS only support string
                    })}
                  ></textarea>
                  {errors.address?.type === "required" && (
                    <label className="label">
                      <span className="label-text text-red-500">
                        {errors?.address?.message}
                      </span>
                    </label>
                  )}

                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={
                        errors?.quantity || errors.phone || errors.address
                      }
                    >
                      Buy Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
