import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Layout/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0kCoAIa0rKU9JIZvac8dF0rPH2AgfGV4WtUOJL9UIJR0AmG0Cu7NFgozkwodl2EZMJPOUo3oWX29X9zPM7vppP00srh5YQfm"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://peaceful-lowlands-36792.herokuapp.com/orders/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(id);
  console.log(order);
  return (
    <div>
      <div className="hero min-h-screen w-full">
        <div
          className="hero-content w-7/12
        
        flex-col "
        >
          {/* First Part */}
          <div className="card w-full  bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="text-primary font-bold">Hello, {order.userName}</p>
              <h2 className="card-title">Pay for {order.title}</h2>

              <p>Please Pay ${order.totalPrice}</p>
            </div>
          </div>

          {/* Second Part */}
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
