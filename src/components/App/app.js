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
  const navigate = useNavigate();

  const closeBrief = () => {
    setShowBrief(false);
  };

  const closeAndRedirectToHome = () => {
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    setShowModal(false);
  }, []);

  return (
    <div className="page-container">
      <Header burgerMenuOpen={burgerMenuOpen} toggleBurgerMenu={() => setBurgerMenuOpen(!burgerMenuOpen)} />
      <MainText />
      <LoadingAnimation/>

      {}
      {showBrief && <Brief onClose={closeBrief} />}
      
      {}
      {showModal && <Modal toggleModal={closeAndRedirectToHome} />}
    </div>
  );
}

export default App;