import "./App.css";
import ProductsArchive from "./components/products/products-archive";
import Header from "./components/shared/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/products/single-product";
import { useState } from "react";
import AboutUs from "./components/about";
import ContactUs from "./components/contact";
import Cart from "./components/cart";

function App() {
  const [count, countVal] = useState(0);
  function CounterInrease() {
    countVal(count + 1);
  }

  return (
    <BrowserRouter className="App">
      <Header count={count} />
      <Routes>
        <Route path="/" element={<ProductsArchive InPro={CounterInrease} />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
