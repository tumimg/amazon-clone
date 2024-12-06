import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Auth from "../pages/Auth/Signup";
import Payment from "../pages/Payment/Payment";
import Cart from "../pages/Cart/Cart";
import Orders from "../pages/Orders/Orders";
import Results from "../pages/Results/Result";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Product from "../components/Product/Product";

//for stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

//provide public key and load it to stirpe
const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise and hold that in protectedRoute
            <ProtectedRoute
              msg={
                "Please sign in to complete your payment. (You'll be redirected to the checkout page)"
              }
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"Please sign in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
