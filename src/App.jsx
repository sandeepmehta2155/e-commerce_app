import React, { useEffect, useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigation";
import "./styles.css";
import { BookBatches } from "./book-batch";
import { FeaturedAuthors } from "./featured-authors";
import { Products } from "./products";
import { Cart } from "./cart";
import { WishList } from "./wishlist";
import { Footer } from "./footer";
import axios from "axios";

export default function App() {
  const [disComponent, setDispComponent] = useState("products");
  const [mode, setMode] = useState("bodyLite");
  const [txtalign, settxtAlign] = useState("right");
  const [chatBot, setChatBot] = useState("none");
  const [chat, setChat] = useState("");
  const [chatOutput, setChatOutput] = useState("");

  useEffect(() => {
    axios
      .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes/5")
      .then((res) => {
        setChatOutput(res.data[0].quote);
      });
  }, [chat]);

  const CartIcon = () => {
    const [options, setOptions] = useState("optionSetNone");
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
        <svg className="wishList" viewBox="2 2 30 30">
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
          </g>
        </svg>
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
          <li key={"home"} className="optionSet pills">
            Home
          </li>
          <li key={"Login"} className="optionSet pills">
            Login
          </li>
          <li key={"Products"} className="optionSet pills">
            Products
          </li>
          <li key={"Cart"} className="optionSet pills">
            Cart
          </li>
          <li key={"WishList"} className="optionSet pills">
            WishList
          </li>
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
      <Header />
      <span
        className="bi bi-chat-dots"
        onClick={() =>
          setChatBot((chatBot) => (chatBot === "none" ? "" : "none"))
        }
      >
        <svg className="chat-bubble" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 30.7873,85.113394       30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744"
          />
          <path
            className="line line2"
            d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884"
          />
          <circle className="circle circle1" r="1.9" cy="50.7" cx="42.5" />
          <circle className="circle circle2" cx="49.9" cy="50.7" r="1.9" />
          <circle className="circle circle3" r="1.9" cy="50.7" cx="57.3" />
        </svg>
      </span>
      <div
        className="chatBox"
        style={{
          display: chatBot
        }}
      >
        <input
          type="text"
          className="chatBot"
          onKeyDown={(e) =>
            e.key === "Enter" ? setChat(e.target.value) : setChat("")
          }
        />
        <div className="chatOuput">{chatOutput}</div>
        <div className="chatFooter">
          This is just for fun
          <span role="img" aria-labelledby="smiley">
            😄
          </span>
          <div />
          Please don't mind
        </div>
      </div>

      <Navigation />
      <CartIcon />

      <div className={mode}>
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
      </div>

      <Footer />
    </>
  );
}
