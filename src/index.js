import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AboutUser from "./Swiggy/AboutUser";
import Help from "./Swiggy/Help";
import Profile from "./Swiggy/Profile";
import Cart from "./Swiggy/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help"  element={<Help />} />
            <Route path="/cart"  element={<Cart />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
