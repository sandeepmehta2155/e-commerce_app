import { useCart } from "./cart-context";

export const WishList = () => {
  const { itemsInCart, cartDispatch } = useCart();
  return (
    <div>
      <img
        src="https://paradigmlife.net/blog/wp-content/uploads/2015/04/Wealth-books-pic-1024x768.jpg"
        alt="loading..."
        className="Img"
      />

      <h1>Books in focus</h1>

      <ul className="productList">
        {itemsInCart.map((obj) => (
          <li className="card" key={obj.id} style={{ listStyle: "none" }}>
            {obj.wishList === "yes" && (
              <>
                <div className="card-title">{obj.name}</div>

                <img height="200px" src={obj.src} alt="loading.." />
                <br />
                <div>
                  Rs {obj.price}
                  <span style={{ margin: ".5rem" }}>
                    <s>Rs {obj.Originalprice}</s>
                  </span>
                  <img
                    src="//static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    className="f-assured"
                    alt="loading"
                  />
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
                {obj.wishList === "yes" && (
                  <svg
                    className="filledHeart"
                    viewBox="2 2 30 30"
                    onClick={() =>
                      cartDispatch({ type: "removeFromWishList", obj })
                    }
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
                    </g>
                  </svg>
                )}

                {obj.wishList === "no" && (
                  <svg
                    className="emptyHeart"
                    viewBox="2 2 30 30"
                    onClick={() => cartDispatch({ type: "addToWishList", obj })}
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};