import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
import CategoryProductDetailView from "./views/product/CategoryList";
import { Navigate } from "react-router-dom";
import ContextInfo from "./context/Infocontext";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const MyProducts = lazy(() => import("./views/product/MyProducts"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));
const Stores = lazy(() => import("./views/store/Stores"));

export const PrivatRoute = ({ children }) =>{
  return localStorage.getItem("authTokens")? children : <Navigate to = "/account/signin" />;
};
function App() {
  return (
    <ContextInfo>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <TopMenu />
          <Suspense
            fallback={
              <div className="text-white text-center mt-3">Loading...</div>
            }
          >
            <Routes>
              <Route exact path="/" element={<HomeView />} />
              <Route exact path="/account/signin" element={<SignInView />} />
              <Route exact path="/account/signup" element={<SignUpView />} />
              <Route
                exact
                path="/account/forgotpassword"
                element={<ForgotPasswordView />}
              />
              <Route
                exact
                path="/account/profile"
                element={
                  <PrivatRoute>
                    <MyProfileView />
                  </PrivatRoute>
                }
              />
              <Route exact path="/account/orders" element={<OrdersView />} />
              <Route
                exact
                path="/account/wishlist"
                element={<WishlistView />}
              />
              <Route
                exact
                path="/account/notification"
                element={<NotificationView />}
              />
              <Route exact path="/category" element={<ProductListView />} />
              <Route exact path="/search" element={<ProductListView />} />
              <Route exact path="/myproducts/:id" element={
                  <PrivatRoute>
                    <MyProducts />
                  </PrivatRoute>
                } />
              <Route
                exact
                path="/product/show/:id"
                element={<ProductDetailView />}
              />
              <Route
                exact
                path="/product/:id"
                element={<CategoryProductDetailView />}
              />
              <Route exact path="/star/zone" element={<StarZoneView />} />
              <Route exact path="/cart" element={
                  <PrivatRoute>
                    <CartView />
                  </PrivatRoute>
                } />
              {/* <Route exact path="/checkout" element={<CheckoutView />} /> */}
              <Route exact path="/invoice" element={<InvoiceView />} />
              <Route
                exact
                path="/documentation"
                element={<DocumentationView />}
              />
              <Route exact path="/contact-us" element={<ContactUsView />} />
              <Route exact path="/support" element={<SupportView />} />
              <Route exact path="/stores" element={
                  <PrivatRoute>
                    <Stores />
                  </PrivatRoute>
                } />
              <Route exact path="/500" element={<InternalServerErrorView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </Suspense>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </ContextInfo>
  );
}

export default App;
