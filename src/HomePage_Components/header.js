import { useCart } from "../Cart-Page/cart-context";

export function Header() {
  const { itemsInCart } = useCart();

  let cartTotalQuantity = 0;
  let wishListQuantity = 0;

  itemsInCart.map((obj) => {
    cartTotalQuantity += obj.quantity;
    if (obj.wishList === "yes") wishListQuantity++;
  });

  return (
    <>
      <header className="header">
        <img
          className="symbol"
          src="https://media.tenor.com/images/3cb35d3e2cd245a3322923c4eb54c0bf/tenor.gif"
          alt="loading"
        />
        <span className="name">Flanbieuto</span>

        <select className="searchBar">
          <option> All </option>
          <option> Novels</option>
          <option> Poetry </option>
          <option> Non-fiction </option>
          <option> Auto-biography</option>
          <option> Today's Deals</option>
        </select>

        <input type="search" className="search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <div className="cartTotalQuantity">
          <strong>{cartTotalQuantity}</strong>
        </div>
        <div className="wishListTotalQuantity">
          <strong>{wishListQuantity}</strong>
        </div>
      </header>
    </>
  );
}
