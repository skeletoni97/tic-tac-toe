import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PAGES } from "../../utils/Pages/pages"
const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        {PAGES.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={<page.component/>}
              />
          ))} </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
