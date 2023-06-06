import "./App.css";
import React, { useState, useEffect } from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Game from "../Game/Game"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
console.log(isStarted)
  const handleStart = () => {
    setIsStarted(true);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={isStarted ? <Navigate to="/game" /> : <WelcomeScreen handleStart={handleStart} />} />
          <Route path="/game" element={isStarted ? <Game /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
