// import { useCart } from "../Cart-Page/cart-context";
import * as useComponent from "../index";
import { useFilter } from "./filter-context";
import { useProd } from "./product-context";

export const Products = () => {
  const { itemsInProduct, productDispatch } = useProd();
  const { IncludeOutOfStock } = useFilter();
  const { fastDelvry } = useFilter();
  const { value } = useFilter();
  const { sorting } = useFilter();

  return (
    <>
      <img
        src="https://paradigmlife.net/blog/wp-content/uploads/2015/04/Wealth-books-pic-1024x768.jpg"
        alt="loading..."
        className="Img"
      />
      <div className="container">
        <div className="dash one"></div>
        <div className="dash two"></div>
        <div className="dash three"></div>
        <div className="dash four"></div>
      </div>
      <h1 className="productsHead">Books in focus</h1>
      <ul className="productList">
        {itemsInProduct
          .filter((obj) => {
            if (IncludeOutOfStock) return obj.stockStatus === "InStock";
            return obj;
          })
          .filter((obj) => {
            if (fastDelvry) return obj.fastDelivery === "yes";
            return obj;
          })
          .filter((obj) => obj.price > value)
          .sort((a, b) =>
            sorting === "highToLow" ? a.price - b.price : b.price - a.price
          )
          .map((obj) => {
            return (
              <li
                className="productCard"
                key={obj.id}
                style={{ listStyle: "none" }}
              >
                <div className="cardProductDetails">
                  <div>
                    <img className="cardImage" src={obj.src} alt="loading.." />
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
                    {obj.wishList === "no" && (
                      <span
                        className="love"
                        onClick={() =>
                          productDispatch({ type: "addToWishList", obj })
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
                        <button className="heartButton">
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
                        </button>
                      </span>
                    )}

                    <br />
                    <br />
                    <br />
                    <div className="card-title">{obj.name}</div>
                    <div>
                      Rs {obj.price}
                      <span style={{ margin: ".5rem" }}>
                        <s>Rs {obj.Originalprice}</s>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="cartAndWishlistButtons">
                    <div className="fBadge">f</div>
                    <label className="fBadge Text">Assured</label>
                    <br />

                    {/* {obj.wishList === "yes" && (
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
                        onClick={() =>
                          cartDispatch({ type: "addToWishList", obj })
                        }
                      >
                        <g>
                          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                        </g>
                      </svg>
                    )} */}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <useComponent.BookBatches />
      <useComponent.FeaturedAuthors />
    </>
  );
};
