import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./pages/favorite/Favorite";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
