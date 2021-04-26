import React, { useState } from "react";
import * as useComponent from "./index";

import "./styles.css";

import { Products } from "./products";
import { Cart } from "./cart";
import { WishList } from "./wishlist";

import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("bodyLite");
  const [txtalign, settxtAlign] = useState("right");

  const FrontPageRoutes = () => {
    const [options, setOptions] = useState("optionSetNone");
    return (
      <>
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Link>
        <Link to="/wishlist">
          <svg className="wishList" fill="black" viewBox="2 2 30 30">
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
            </g>
          </svg>
        </Link>
        <div
          className="homeOptions"
          onClick={() =>
            options === "optionSet"
              ? setOptions("optionSetNone")
              : setOptions("optionSet")
          }
          style={{ color: "white" }}
        >
          &#9776;
        </div>

        <ul className={options}>
          <Link to="/">
            <li key={"home"} className="optionSet pills">
              Home
            </li>
          </Link>
          <Link to="/login">
            <li key={"Login"} className="optionSet pills">
              Login
            </li>
          </Link>
          <Link to="/">
            <li key={"Products"} className="optionSet pills">
              Products
            </li>
          </Link>
          <Link to="/cart">
            <li key={"Cart"} className="optionSet pills">
              Cart
            </li>
          </Link>
          <Link to="/wishlist">
            <li key={"WishList"} className="optionSet pills">
              WishList
            </li>
          </Link>
        </ul>

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
    <>
      <div className={mode}>
        <useComponent.Header />
        <useComponent.Navigation />
        <useComponent.ChatBot />
        <FrontPageRoutes />
        {/* <div class="_2r34SG">
        <div class="_12FhcQ">
          <div
            class="HQL4QS _28DFQy"
            style={{ transform: "translateX(94.724px)" }}
          >
            <div class="_3FdLqY"></div>
          </div>
          <div
            class="HQL4QS WC_zGJ"
            style={{ transform: "translateX(-48.552px)" }}
          >
            <div class="_3FdLqY"></div>
          </div>
          <div class="_2IN3-t"></div>
          <div
            class="_2IN3-t _1mRwrD"
            style={{ transform: "translate(94.724px)scaleX(0.398)" }}
          ></div>
        </div>
        <div class="_15GU70">
          <div class="_1ftpgI" style={{ width: "47.362px" }}>
            .
          </div>
          <div class="_1ftpgI" style={{ width: "47.362px" }}>
            .
          </div>
          <div class="_1ftpgI" style={{ width: "47.362px" }}>
            .
          </div>
          <div class="_1ftpgI" style={{ width: "47.362px" }}>
            .
          </div>
          <div class="_1ftpgI" style={{ width: "47.362px" }}>
            .
          </div>
          <div class="_1ftpgI" style={{ width: "0px" }}></div>
        </div>
      </div> */}

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>

        <useComponent.Footer />
      </div>
    </>
  );
}
