import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Items() {
  const itemObj = useSelector((store) => store.itemsReducer);
  // const [itemsList] = itemObj.items;
  const [itemsList, setItemsList] = useState(itemObj.items);
  const [searchKey, setSearchKey] = useState("");

  function filterItems() {
    // alert(searchKey);
    const duplicateList = itemObj.items;
    const filteredList = duplicateList.filter((item) =>
      item.itemName.toLowerCase().includes(searchKey.toLowerCase())
    );
    setItemsList(filteredList);
  }
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
      <input
        type="text"
        className="form-control mb-5"
        placeholder="Search Products"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        onKeyUp={filterItems}
      />
      {/* <h1>Total Items = {itemObj.items.length}</h1> */}
      <div className="row">{itemsData}</div>
    </div>
  );
}
