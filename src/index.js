import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./Products-Page/product-context";
import { FilterProvider } from "./Products-Page/filter-context";
import { ThemeProvider } from "./HomePage_Components/theme-context";
import { AuthProvider } from "./Login-Page/auth-context";
import { FeaturedAuthorProvider } from "./HomePage_Components/featured-provider";
import { BookBatchProvider } from "./HomePage_Components/book-batch-provider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

export { RedirectPage } from "./Redirect-Page/Redirect-Page";
export { Header } from "./HomePage_Components/header";
export { Footer } from "./HomePage_Components/footer";
export { FeaturedAuthors } from "./HomePage_Components/featured-authors";
export { BookBatches } from "./HomePage_Components/book-batch";
export { Login } from "./Login-Page/Login";
export { Subscription } from "./Login-Page/Subscription";
export { Products } from "./Products-Page/products";
export { Home } from "./HomePage_Components/Home";
export { Cart } from "./Cart-Page/cart";
export { WishList } from "./WishList-Page/wishlist";
export { UserProfile } from "./UserProfile-Page/userprofile";
export { PrivateRoute } from "./UserProfile-Page/PrivateRoute";
export { RouteComponents } from "./Router-Components/Route-Components";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <FilterProvider>
            <ProductProvider>
              <FeaturedAuthorProvider>
                <BookBatchProvider>
                  <App />
                </BookBatchProvider>
              </FeaturedAuthorProvider>
            </ProductProvider>
          </FilterProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
