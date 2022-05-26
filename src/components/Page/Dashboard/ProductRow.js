import React from "react";

const ProductRow = ({ product, index, setProductId, setDeleteProduct }) => {
  const { title, price, quantity, url } = product;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-32 rounded">
            <img src={url} />
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <label
          htmlFor="delete-confirm-modal"
          className="btn btn-error btn-xs"
          onClick={() => {
            setProductId(product._id);
            setDeleteProduct(true);
          }}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
