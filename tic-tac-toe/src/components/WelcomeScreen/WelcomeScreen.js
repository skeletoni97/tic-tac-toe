import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./WelcomeScreen.css"
function WelcomeScreen() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/game')
  }
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Добро пожаловать в Крестики-нолики!</h1>
      <button className="start-button" onClick={handleStart}>Start</button>
    </div>
  );
}

export default WelcomeScreen;