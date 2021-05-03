import { createContext, useContext, useReducer } from "react";

export const ProductContext = createContext();

export function useProd() {
  return useContext(ProductContext);
}
export function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(productReducer, {
    itemsInProduct
  });
  return (
    <ProductContext.Provider
      value={{ itemsInProduct: productState.itemsInProduct, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const itemsInProduct = [
  {
    id: 1,
    name: "Wall Street Meat",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51VFQePgXxL._SX326_BO1,204,203,200_.jpg",
    Originalprice: 989,
    price: 824,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    category: "economyAndFinance"
  },
  {
    id: 2,
    name: "How to Avoid Loss...",
    Originalprice: 399,
    price: 380,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51B50rWGTkL._SX315_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 3,
    name: "How do I made...",
    Originalprice: 295,
    price: 251,
    wishList: "no",
    quantity: 0,
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/513nAJS9epL._SX326_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 5,
    name: "The Intelligent Investor",
    Originalprice: 799,
    price: 450,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "no",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 6,
    name: "Everything You Wanted...",
    Originalprice: 499,
    price: 370,
    quantity: 0,
    wishList: "no",
    stockStatus: "OutOfStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41l0cQEXrCL._SX346_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 10,
    name: "A Court of Thorns",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51FaoP3MfML.jpg",
    category: "youngAndAdultNovels"
  },
  {
    id: 11,
    name: "A Separate Peace",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51L1V9iIB7L.jpg",
    category: "youngAndAdultNovels"
  },
  {
    id: 12,
    name: "A Wizard of Earthsea",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355896528l/13356675.jpg",
    category: "youngAndAdultNovels"
  },

  {
    id: 13,
    name: "A Wrinkle in Time",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/510-sv2qzFL.jpg",
    category: "youngAndAdultNovels"
  },

  {
    id: 16,
    name: "The Beginner's Stock",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/416QkO9SfFL._SX331_BO1,204,203,200_.jpg"
  }
];
function productReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                quantity: item.quantity + 1
              };
            default:
              return { ...item };
          }
        })
      };
    case "decrement":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              switch (item.quantity) {
                case 0:
                  return {
                    ...item
                  };
                default:
                  return { ...item, quantity: item.quantity - 1 };
              }

            default:
              return { ...item };
          }
        })
      };
    case "removeFromCart":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                quantity: 0
              };
            default:
              return { ...item };
          }
        })
      };
    case "addToWishList":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                wishList: "yes"
              };
            default:
              return { ...item };
          }
        })
      };
    case "removeFromWishList":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                wishList: "no"
              };
            default:
              return { ...item };
          }
        })
      };
    default:
      return state;
  }
}
