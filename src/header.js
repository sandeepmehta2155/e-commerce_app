import { useCart } from "./cart-context";

export function Header() {
  const { itemsInCart } = useCart();

  let cartTotalQuantity = 0;

  itemsInCart.map((obj) => (cartTotalQuantity += obj.quantity));

  return (
    <>
      <header className="header">
        <img
          className="symbol"
          src="https://media.tenor.com/images/3cb35d3e2cd245a3322923c4eb54c0bf/tenor.gif"
          alt="loading"
        />
        <span className="name"> Flanbieuto</span>

        <select className="searchBar">
          <option> All </option>
          <option> Finance</option>
          <option> Classic </option>
          <option> Horror </option>
          <option> Historic</option>
          <option> Fantasy </option>
          <option> Today's Deals</option>
        </select>

        <input type="text" className="search" />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </header>
    </>
  );
}
