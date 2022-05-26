import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Loading from "../../Layout/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("products", () =>
    fetch("https://peaceful-lowlands-36792.herokuapp.com/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(products);
  return (
    <div>
      <h1 className="text-3xl font-semibold border-b pb-3 mb-5">
        Manage Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <ProductRow
                product={product}
                index={index + 1}
                key={product._id}
                setProductId={setProductId}
                setDeleteProduct={setDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteConfirmModal
          setDeleteOrder={setDeleteProduct}
          order={productId}
          deleteProduct={deleteProduct}
          refetch={refetch}
          url="product"
        />
      )}
    </div>
  );
};

export default ManageProducts;
