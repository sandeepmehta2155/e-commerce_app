import React from "react";
import * as useComponent from "./index";

import "./styles.css";
import { useTheme } from "./HomePage_Components/theme-context";

import { Products } from "./Products-Page/products";
import { Cart } from "./Cart-Page/cart";
import { WishList } from "./WishList-Page/wishlist";

import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./Login-Page/PrivateRoute";

export default function App() {
  const { mode } = useTheme();
  return (
    <>
      <div className={mode}>
        <useComponent.Header />
        <useComponent.Navigation />
        <useComponent.ChatBot />
        <useComponent.FrontPageRoutes />
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
          <Route path="/login" element={<PrivateRoute />} />
        </Routes>

        <useComponent.Footer />
      </div>
    </>
  );
}
