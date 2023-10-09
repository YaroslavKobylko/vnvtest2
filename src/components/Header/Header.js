import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import vnvLogo from './vnvlogo-05.png';
import burgerIcon from './round_hamburger_menu_burger_icon_132782.svg';
import Modal from '../Modal/Modal';
import './header.css';

function Header() {
  const [burgerMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const location = useLocation();
  const isFAQPage = location.pathname === '/faq';
  const isWhyUsPage = location.pathname === '/why-us';
  const isServicePage = location.pathname === '/service';
  const isProjectsPage = location.pathname === '/projects';

  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src={vnvLogo} alt="VNV Logo" className="logo" />
        </Link>
        <nav className={`menu ${burgerMenuOpen ? 'open' : ''}`}>
          <ul className="menu-links">
          <li className={`${isWhyUsPage ? 'faq-active' : 'link'}`}>
              <Link to="/why-us">Чому ми?</Link>
            </li>
            <li className={`${isServicePage ? 'faq-active' : 'link'}`}>
              <Link to="/service">Послуги</Link>
            </li>
            <li className={`${isProjectsPage ? 'faq-active' : 'link'}`}>
              <Link to="/projects">Наші проекти</Link>
            </li>
            <li className={`${isFAQPage ? 'faq-active' : 'link'}`}>
                <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <img
                src={burgerIcon}
                alt="Burger Icon"
                className={`link menu-toggle ${burgerMenuOpen ? 'open' : ''}`}
                onClick={toggleModal}
              />
            </li>
          </ul>
        </nav>
      </div>
      {modalOpen && <Modal toggleModal={toggleModal} />}
    </header>
  );
}

export default Header;