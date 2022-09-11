import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Items() {
  const itemObj = useSelector((store) => store.itemsReducer);
  const itemsList = itemObj.items;

  const itemsData = itemsList.map((item) => {
    return (
      <div className="col-md-4">
        <Item item={item} />
      </div>
    );
  });
  return (
    <div className="container">
      <h1>Products List</h1>
      {/* <h1>Total Items = {itemObj.items.length}</h1> */}
      <div className="row">{itemsData}</div>
    </div>
  );
}
