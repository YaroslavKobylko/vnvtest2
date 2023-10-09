import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MainText from '../MainText/MainText';
import Brief from '../Brief/Brief';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

import './app.css';

function App() {
  const [showBrief, setShowBrief] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Зміни на useNavigate

  // Функція для закриття брифу
  const closeBrief = () => {
    setShowBrief(false);
  };

  // Закрити модальне вікно та перейти на початкову сторінку
  const closeAndRedirectToHome = () => {
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    // При завантаженні компонента показати модальне вікно
    setShowModal(false); // Зміни на true, якщо ви хочете відображати модальне вікно при завантаженні
  }, []);

  return (
    <div className="page-container">
      <Header burgerMenuOpen={burgerMenuOpen} toggleBurgerMenu={() => setBurgerMenuOpen(!burgerMenuOpen)} />
      <MainText />
      <LoadingAnimation/>

      {/* Відображення компонента Brief, якщо showBrief === true */}
      {showBrief && <Brief onClose={closeBrief} />}
      
      {/* Відображення модального вікна */}
      {showModal && <Modal toggleModal={closeAndRedirectToHome} />}
    </div>
  );
}

export default App;