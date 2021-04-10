import { useCart } from "./cart-context";
export const Cart = () => {
  const { itemsInCart, cartDispatch } = useCart();
  let cartTotalQuantity = 0;
  let cartTotalPrice = 0;
  itemsInCart.map((obj) => (cartTotalQuantity += obj.quantity));

  itemsInCart.map((obj) => (cartTotalPrice += obj.price * obj.quantity));

  return (
    <>
      <div className="card">
        <h3 className="heading">Cart Total Quantity : {cartTotalQuantity} </h3>
        <h3 className="heading">Cart Total Price : {cartTotalPrice} </h3>
      </div>
      <ul className="row3col">
        {itemsInCart.map(
          (obj) =>
            obj.quantity > 0 && (
              <li className="card" key={obj.id} style={{ listStyle: "none" }}>
                <div className="card-title">{obj.name}</div>
                <div className="card-subtitle">f-assured </div>
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
                  onClick={() => cartDispatch({ type: "removeFromCart", obj })}
                  className="btn btn-primary"
                >
                  Remove from cart
                </button>
              </li>
            )
        )}
      </ul>
    </>
  );
};
