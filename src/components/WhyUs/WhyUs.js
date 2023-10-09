import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Brief from '../Brief/Brief';
import Modal from '../Modal/Modal';
import Adventages from '../Adventages/Adventages';
import { useNavigate } from 'react-router-dom'; // Зміни імпорт на useNavigate

function WhyUs () {
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
      <Adventages />
      {/* Відображення компонента Brief, якщо showBrief === true */}
      {showBrief && <Brief onClose={closeBrief} />}
      
      {/* Відображення модального вікна */}
      {showModal && <Modal toggleModal={closeAndRedirectToHome} />}
    </div>
  );
}

export default WhyUs;