import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");
  const dispatch = useDispatch();

  function addItem() {
    var item = {
      itemName: itemName,
      itemPrice: itemPrice,
      itemImage: itemImage,
    };
    dispatch({ type: "ADD_ITEM", payload: item });
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Price"
          value={itemPrice}
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Image"
          value={itemImage}
          onChange={(e) => {
            setItemImage(e.target.value);
          }}
        />
        <button onClick={addItem} className="btn btn-primary">
          ADD ITEM
        </button>
      </div>
    </div>
  );
}
