import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Collection from "./Pages/Collection.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Placeorder from "./Pages/Placeorder.jsx";
import Order from "./Pages/Order.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import SearchBar from "./component/SearchBar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<Placeorder />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
