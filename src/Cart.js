import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartObj = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();
  const tableBody = cartObj.cartItems.map((item) => {
    return (
      <tr>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: "DELETE_ITEM_FROM_CART", payload: item });
          }}
        >
          DELETE
        </button>
      </tr>
    );
  });
  return (
    <div className="row justify-content-center  mt-5">
      {/* <h1>This is Cart Component: cartLength = {cartObj.cartItems.length}</h1> */}
      <table className="table table-dark table-bordered col-md-8">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}
