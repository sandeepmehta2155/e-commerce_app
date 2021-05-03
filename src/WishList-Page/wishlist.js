import { useProd } from "../Products-Page/product-context";

export const WishList = () => {
  const { itemsInProduct, productDispatch } = useProd();
  return (
    <>
      <ul className="wishListPage">
        <h2> Your Wishlist </h2>
        {itemsInProduct.map(
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
                    <button
                      className="wishListbi-trashButton"
                      onClick={() =>
                        productDispatch({ type: "increment", obj })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                  {obj.quantity > 0 && (
                    <button
                      className="wishListbi-trashButton"
                      onClick={() =>
                        productDispatch({ type: "removeFromCart", obj })
                      }
                    >
                      Remove From Cart
                    </button>
                  )}
                  {obj.wishList === "yes" && (
                    <button
                      className="wishListbi-wishListHeartButton"
                      onClick={() =>
                        productDispatch({ type: "removeFromWishList", obj })
                      }
                    >
                      {obj.wishList === "yes" && (
                        <span
                          className="love active"
                          onClick={() =>
                            productDispatch({ type: "removeFromWishList", obj })
                          }
                        >
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="drop"></span>
                          <span className="circleheart"></span>

                          <svg
                            className="heart"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0"
                            y="0"
                            width="510"
                            height="510"
                            viewBox="0 0 510 510"
                            // xml:space="preserve"
                          >
                            <path d="M255 489.6l-35.7-35.7C86.7 336.6 0 257.6 0 160.7 0 81.6 61.2 20.4 140.3 20.4c43.4 0 86.7 20.4 114.8 53.6C283.1 40.8 326.4 20.4 369.8 20.4 448.8 20.4 510 81.6 510 160.7c0 96.9-86.7 176-219.3 293.3L255 489.6z" />
                          </svg>
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};
