import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Brief from '../Brief/Brief';
import Modal from '../Modal/Modal';
import Adventages from '../Adventages/Adventages';
import { useNavigate } from 'react-router-dom';

function WhyUs () {
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
      <Adventages />
      {}
      {showBrief && <Brief onClose={closeBrief} />}
      
      {}
      {showModal && <Modal toggleModal={closeAndRedirectToHome} />}
    </div>
  );
}

export default WhyUs;