import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./WelcomeScreen.module.css"
function WelcomeScreen() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/game')
  }
  return (
    <div className={style.welcomeScreen}>
      <h1 className={style.welcomeTitle}>Добро пожаловать в Крестики-нолики!</h1>
      <button className={style.startButton} onClick={handleStart}>Start</button>
    </div>
  );
}

export default WelcomeScreen;