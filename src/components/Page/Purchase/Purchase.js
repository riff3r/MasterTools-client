import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Layout/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [orderStatus, setOrderStatus] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const orderQuantity = watch("quantity");
  console.log(orderQuantity);

  const orderReq = {
    moq: 100,
    au: 1000,
  };

  useEffect(() => {
    if (orderQuantity < orderReq.moq) {
      setOrderStatus(false);
      toast.error("You order quantity bellow the moq");
      return;
    } else {
      setOrderStatus(true);
    }
  }, [orderQuantity]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div class="hero min-h-screen bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Tools Title</h1>
            <p class="py-6">
              short description - Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <p>minimum order quantity: 100</p>
            <p>available quantity: 1000</p>
            <p>Unit price: 1000</p>
            <p>Total Price: 100000</p>

            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Order Confirmation</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div class="form-control w-full max-w-xs mb-5">
                    <label class="label">
                      <span class="label-text">Quantity</span>
                    </label>
                    <input
                      type="number"
                      class="input input-bordered input-primary w-full max-w-xs"
                      {...register("quantity")}
                      placeholder={orderReq.moq}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="User Name"
                    class="input input-bordered input-primary w-full max-w-xs mb-5"
                    value={user.displayName}
                    disabled
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    class="input input-bordered input-primary w-full max-w-xs mb-5"
                    value={user.email}
                    disabled
                  />

                  <input
                    type="text"
                    placeholder="Phone"
                    class="input input-bordered input-primary w-full max-w-xs mb-5"
                  />

                  <textarea
                    class="textarea textarea-primary w-full"
                    placeholder="Address"
                  ></textarea>

                  <div class="card-actions justify-end">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      disabled={!orderStatus}
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
