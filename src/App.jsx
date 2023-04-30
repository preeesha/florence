import "./App.scss";
import "./styles/Icons.css";

import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Product from "./routes/Product";
import Signup from "./routes/signup";
import Listing from "./routes/Listing";
import Cart from "./routes/Cart";

export default function App() {
  // return <Login />;
  // return <Signup />;
  // return <Product />;
  // return <Listing />;
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/listing" element={<Navigate to="/listing/trending" />} />
        <Route path="/listing/:category" element={<Listing />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
