import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { itemsInCart });
  return (
    <CartContext.Provider
      value={{ itemsInCart: cartState.itemsInCart, cartDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

const itemsInCart = [
  {
    id: 1,
    name: "Wall Street Meat",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51VFQePgXxL._SX326_BO1,204,203,200_.jpg",
    Originalprice: 989,
    price: 824,
    quantity: 0
  },
  {
    id: 2,
    name: "How to Avoid Loss...",
    Originalprice: 399,
    price: 380,
    quantity: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51B50rWGTkL._SX315_BO1,204,203,200_.jpg"
  },
  {
    id: 3,
    name: "How do I made...",
    Originalprice: 295,
    price: 251,
    quantity: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/513nAJS9epL._SX326_BO1,204,203,200_.jpg"
  },
  {
    id: 4,
    name: "Taxmann's Stock Market Wisdom",
    Originalprice: 725,
    price: 604,
    quantity: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41jKUY3iEFL._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    name: "The Intelligent Investor",
    Originalprice: 799,
    price: 450,
    quantity: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg"
  },
  {
    id: 6,
    name: "Everything You Wanted...",
    Originalprice: 499,
    price: 370,
    quantity: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41l0cQEXrCL._SX346_BO1,204,203,200_.jpg"
  }
  // {
  //   id: 7,
  //   name: "japani polish",
  //   price: 10000,
  //   quantity: 0,
  //   src:
  //     "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
  // },
  // {
  //   id: 8,
  //   name: "japani polish",
  //   price: 10000,
  //   quantity: 0,
  //   src:
  //     "https://images-na.ssl-images-amazon.com/images/I/51B50rWGTkL._SX315_BO1,204,203,200_.jpg"
  // },
  // {
  //   id: 9,
  //   name: "japani polish",
  //   price: 10000,
  //   quantity: 0,
  //   src:
  //     "https://images-na.ssl-images-amazon.com/images/I/416QkO9SfFL._SX331_BO1,204,203,200_.jpg"
  // }
];
function cartReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
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
        itemsInCart: state.itemsInCart.map((item) => {
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
        itemsInCart: state.itemsInCart.map((item) => {
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
    default:
      return state;
  }
}
