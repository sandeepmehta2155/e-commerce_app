import { useCart } from "./cart-context";

export const Cart = () => {
  const { itemsInCart, cartDispatch } = useCart();
  let cartTotalQuantity = 0;
  let cartTotalPrice = 0;
  itemsInCart.map((obj) => (cartTotalQuantity += obj.quantity));

  itemsInCart.map((obj) => (cartTotalPrice += obj.price * obj.quantity));

  return (
    <>
      <div className="cartCheckOut">
        <h2>
          <strong>Check Out to here</strong>{" "}
        </h2>
        <h3>Cart Total Quantity : {cartTotalQuantity} </h3>
        <h3>Cart Total Price : {cartTotalPrice} </h3>
      </div>
      <ul className="cartDetails">
        <h2> Shopping Cart </h2>
        {itemsInCart.map(
          (obj) =>
            obj.quantity > 0 && (
              <li
                className="cartProduct"
                key={obj.id}
                style={{ listStyle: "none" }}
              >
                <img
                  height="200px"
                  src={obj.src}
                  alt="loading.."
                  className="cartImg"
                />
                <div className="cartProductDetails">
                  <div className="cartProductName">{obj.name}</div>

                  <br />
                  <div>
                    Rs {obj.price}
                    <span>
                      <s>Rs {obj.Originalprice}</s>
                    </span>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={() => cartDispatch({ type: "increment", obj })}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => cartDispatch({ type: "decrement", obj })}
                  >
                    -
                  </button>
                  <div>Cart quantity : {obj.quantity} </div>
                  <button
                    className="wishListbi-trashButton"
                    onClick={() =>
                      cartDispatch({ type: "removeFromCart", obj })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      // height="16"
                      fill="currentColor"
                      // class="bi bi-trash"
                      viewBox="0 0 16 16"
                      className="wishList bi-trash"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};
