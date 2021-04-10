import React, { useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigation";
import "./styles.css";
import { BookBatches } from "./book-batch";
import { FeaturedAuthors } from "./featured-authors";
import { Products } from "./products";
import { Cart } from "./cart";
import { WishList } from "./wishlist";
import { Footer } from "./footer";

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
