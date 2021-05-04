import { useProd } from "../Products-Page/product-context";

export const Cart = () => {
  const { itemsInProduct, productDispatch } = useProd();
  let cartTotalQuantity = 0;
  let cartTotalPrice = 0;
  itemsInProduct.map((obj) => (cartTotalQuantity += obj.quantity));

  itemsInProduct.map((obj) => (cartTotalPrice += obj.price * obj.quantity));

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
        {itemsInProduct.map(
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
                    {"   "}|{"   "}
                    <span>
                      1 offer available{"   "}
                      <svg
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                        className="_3GN0Y0"
                      >
                        <g fill="none">
                          <path d="M-1-1h16v16H-1"></path>
                          <path
                            d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z"
                            fill="#388e3c"
                            class=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <br />
                  <button
                    className="decButton"
                    onClick={() => productDispatch({ type: "decrement", obj })}
                  >
                    -
                  </button>
                  <button
                    className="incButton"
                    onClick={() => productDispatch({ type: "increment", obj })}
                  >
                    +
                  </button>
                  <div>Cart quantity : {obj.quantity} </div>
                  <button
                    className="cartbi-trashButton"
                    onClick={() =>
                      productDispatch({ type: "removeFromCart", obj })
                    }
                  >
                    Remove From Cart
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};
