import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import Nav from "./components/Nav";
import ProductSection from "./components/ProductSection";
import Banner from "./components/Banner";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact_Us from "./components/Contact_Us";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";
import About_Us from "./components/About_Us";

function App() {
  

  return (

    <div>
    
      



    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register/>}></Route>

      <Route path="/home" element={<Home />}></Route>
      <Route path="/home" element={<About_Us />}></Route>


      <Route path="/home" element={<Contact_Us />}></Route>

      {/* <Route path="/login" element={<Login />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>

    
  );
}

export default App;

// header
// search bar
// banner
// products
// footer
//Details
//Contact
//About Us
//
//
//
//
//Add to Cart
//Login
//Sign Up
