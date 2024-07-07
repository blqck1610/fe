import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/HomeScreen";
// layouts
import BaseLayout from "./components/layout/BaseLayout";
import AuthLayout from "./components/layout/AuthLayout";
import { GlobalStyles } from "./styles/global/GlobalStyles";
// auth pages
import SignIn from "./screens/auth/SignInScreen";
import SignUp from "./screens/auth/SignUpScreen";
import Reset from "./screens/auth/ResetScreen";
import ChangePassword from "./screens/auth/ChangePasswordScreen";
import CheckMail from "./screens/auth/CheckMailScreen";
import Verification from "./screens/auth/VerificationScreen";
import NotFound from "./screens/error/NotFoundScreen";
import ProductList from "./screens/product/ProductListScreen";
import ProductDetails from "./screens/product/ProductDetailsScreen";
import Cart from "./screens/cart/CartScreen";
import CartEmpty from "./screens/cart/CartEmptyScreen";
import Checkout from "./screens/checkout/CheckoutScreen";
import Order from "./screens/user/OrderListScreen";
import OrderDetail from "./screens/user/OrderDetailScreen";
import WishList from "./screens/user/WishListScreen";
import WishListEmpty from "./screens/user/WishListEmptyScreen";
import Confirm from "./screens/user/ConfirmScreen";
import Account from "./screens/user/AccountScreen";
import Address from "./screens/user/AddressScreen";

import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* main screens */}
          < path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/account" element={<PrivateRoute> <Account /> </PrivateRoute>}/>
            <Route path="/cart" element={<PrivateRoute> <Cart /> </PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute>} />
            <Route path="/empty_cart" element={<PrivateRoute><CartEmpty /></PrivateRoute>} />
            <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
            <Route path="/empty_wishlist" element={<PrivateRoute><WishListEmpty /><PrivateRoute>} />
            <Route path="/wishlist" element={<PrivateRoute><WishList /></PrivateRoute>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/account/add" element={<Address />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/order_detail" element={<OrderDetail />} />
            <Route path="/product/details" element={<ProductDetails />} />
          </Route>

          {/* auth screens */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="reset" element={<Reset />} />
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="check_mail" element={<CheckMail />} />
            <Route path="verification" element={<Verification />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;