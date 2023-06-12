import style from "./App.module.css";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PAGES } from "../../utils/Pages/pages"
const App = () => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Routes>
        {PAGES.map((page) => (
            <Route
              path={page.path}
              element={<page.component />}
              />
          ))} </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
