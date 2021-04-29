import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./Cart-Page/cart-context";
import { FilterProvider } from "./Products-Page/filter-context";
import { ThemeProvider } from "./HomePage_Components/theme-context";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

export { Header } from "./HomePage_Components/header";
export { Footer } from "./HomePage_Components/footer";
export { FeaturedAuthors } from "./HomePage_Components/featured-authors";
export { BookBatches } from "./HomePage_Components/book-batch";
export { Navigation } from "./HomePage_Components/navigation";
export { ChatBot } from "./HomePage_Components/chatBot";
export { PrivateRoute } from "./Login-Page/PrivateRoute";

export { FrontPageRoutes } from "./HomePage_Components/FrontPageRoutes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>,
  rootElement
);
