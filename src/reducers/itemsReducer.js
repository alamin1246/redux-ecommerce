const initialData = {
  items: [
    {
      itemName: "Realme 5 (Crystal Purple, 32 GB) (3 GB RAM)",
      itemImage:
        "https://th.bing.com/th/id/OIP.P86tlAgl_nhXvdKb2G9u6wHaKD?w=156&h=211&c=7&r=0&o=5&pid=1.7",
      itemPrice: "15000",
    },
    {
      itemName: "Realme 3 Pro (Lighting Purple, 64 GB) (4 GB RAM)",
      itemImage:
        "https://th.bing.com/th/id/OIP.ZBtbxnwQmY5Z2AxDtCwieAHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7",
      itemPrice: "18000",
    },
    {
      itemName: "Samsung Galaxy A50 (Blue, 64 GB) (4 GB RAM)",
      itemImage:
        "https://th.bing.com/th/id/OIP.5TWRiRjlmKRBZtAPcdx8awHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7",
      itemPrice: "19500",
    },
    {
      itemName: "Redmi 8A (Sunset Red, 32 GB) (2 GB RAM)",
      itemImage:
        "https://th.bing.com/th/id/OIP.VKHDP92XbvLvc-_JDISxGQHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
      itemPrice: "15000",
    },
    {
      itemName: "Cenizas Mens Cotton Hooded Full Sleeves T-Shirt",
      itemImage:
        "https://th.bing.com/th/id/OIP.NueWmcrZrY1BjXC_WuRwKwAAAA?w=170&h=227&c=7&r=0&o=5&pid=1.7",
      itemPrice: "5000",
    },
    {
      itemName: "CHKOKKO Full Sleeve Cotton Casual Round Neck T-Shirt for Men",
      itemImage:
        "https://th.bing.com/th/id/OIP.5CbJkZAFHOIL58JuAxovJwHaIq?w=187&h=219&c=7&r=0&o=5&pid=1.7",
      itemPrice: "3000",
    },
  ],
};

function itemsReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default: {
      return state;
    }
  }
}

export default itemsReducer;
