
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { NavLink, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" />

        <NavLink className="navh11" to="/">Home</NavLink>
        <NavLink className="navh1" to="/product">Product</NavLink>
        <h1 className="navh1">Agents</h1>
        <h1 className="navh1">Conact</h1>
        <button className="navbtn">Sign Up</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
