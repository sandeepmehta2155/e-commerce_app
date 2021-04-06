import React, { useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigation";
import "./styles.css";
import { BookBatches } from "./book-batch";
import { FeaturedAuthors } from "./featured-authors";

import { useCart } from "./cart-context";

import { Footer } from "./footer";

const WishList = () => {
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

const Products = () => {
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
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
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

export default function App() {
  const [disComponent, setDispComponent] = useState("products");
  const [mode, setMode] = useState("bodyLite");
  const [txtalign, settxtAlign] = useState("right");
  const CartIcon = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
          onClick={() => setDispComponent("cart")}
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <li className="homeOptions">&#9776;</li>

        <button
          className="outerSwitch"
          onClick={() => {
            if (mode === "bodyLite") {
              setMode("bodyDark");
              settxtAlign("left");
            } else {
              setMode("bodyLite");
              settxtAlign("right");
            }
          }}
          style={{ textAlign: txtalign }}
        >
          <button className="innerSwitch"></button>
        </button>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Navigation />
      <CartIcon />
      <body className={mode}>
        {disComponent === "cart" && <Cart />}
        {disComponent === "products" && <Products />}
        {disComponent === "wishList" && <WishList />}
        <br />
        <button
          className="btn card-link"
          onClick={() => setDispComponent("products")}
        >
          Products
        </button>
        <button
          className="btn card-link"
          onClick={() => setDispComponent("wishList")}
        >
          WishList
        </button>
        <BookBatches />
        <FeaturedAuthors />
      </body>

      <Footer />
    </div>
  );
}
