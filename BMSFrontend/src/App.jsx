import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";
import AddBook from "./Pages/AddBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
