import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../view/Homepage";

const StichedRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default StichedRoute;
