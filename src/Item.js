import React from "react";

export default function Item({ item }) {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h1>Product Name: {item.itemName}</h1>
      <img src={item.itemImage} className="img-fluid" />
      <h1>Product Price: Tk.{item.itemPrice} /-</h1>
      <button className="btn btn-primary">ADD TO CART</button>
    </div>
  );
}
