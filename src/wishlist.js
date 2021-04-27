import { useCart } from "./cart-context";

export const WishList = () => {
  const { itemsInCart, cartDispatch } = useCart();
  return (
    <>
      <h1>Books in focus</h1>

      <ul className="wishListPage">
        <h2> Your Wishlist </h2>
        {itemsInCart.map(
          (obj) =>
            obj.wishList === "yes" && (
              <li key={obj.id} className="wishListProduct">
                <img
                  height="200px"
                  src={obj.src}
                  alt="loading.."
                  className="cartImg"
                />
                <div className="wishListProductDetails">
                  <div className="card-title">{obj.name}</div>
                  <br />
                  <div>
                    Rs {obj.price}
                    <span style={{ margin: ".5rem" }}>
                      <s>Rs {obj.Originalprice}</s>
                    </span>
                  </div>
                  <br />
                  <br />
                  <div>Cart quantity : {obj.quantity} </div>
                  {obj.quantity === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                      onClick={() => cartDispatch({ type: "increment", obj })}
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  )}
                  {obj.quantity > 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                      onClick={() =>
                        cartDispatch({ type: "removeFromCart", obj })
                      }
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  )}
                  {obj.wishList === "yes" && (
                    <svg
                      className="bi bi-wishList"
                      width="16"
                      height="16"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                      onClick={() =>
                        cartDispatch({ type: "removeFromWishList", obj })
                      }
                    >
                      <g>
                        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
                      </g>
                    </svg>
                  )}
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};
