import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import vnvLogo from './vnvlogo-05.png';
import './Modal.css';

function Modal({ toggleModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      toggleModal();
    }, 300);
  };

  const handleLogoClick = () => {
    handleClose();
    navigate('/');
  };
  return (
    <div className={`modal ${isOpen ? '' : 'closed'}`}>
      <button className="modal-close-button" onClick={handleClose}>
        <span></span>
        <span></span>
      </button>
      <div className="left-modal">
        <Link to="/" className="modal-logo" onClick={handleLogoClick}>
          {}
          <img src={vnvLogo} alt="VNV Logo" className="logo" />
        </Link>
        <div className="modal-links">
          {}
          <Link to="/why-us">Чому ми?</Link>
          <Link to="/service">Послуги</Link>
          <Link to="/projects">Наші проекти</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="right-modal">
    <div className="modal-contact">
    <h2>Отримайте можливість провести безкоштовну онлайн-консультацію</h2>
    <p>
      Отримайте можливість провести безкоштовну онлайн-консультацію з нашими досвідченими розробниками додатків. Під час консультації ви зможете обговорити ваш проект, отримати відповіді на ваші питання та отримати рекомендації від експертів.
    </p>
    <h3>Чим ми можемо допомогти:</h3>
    <ul>
      <li>Визначити стратегію розробки вашого додатку.</li>
      <li>Підказати, які технології і стек варто використовувати.</li>
      <li>Допомогти з проектуванням інтерфейсу користувача та UX/UI дизайном.</li>
      <li>Розглянути архітектурні рішення та підходи до розробки.</li>
      <li>Визначити вимоги до майбутнього додатку та розробити план дій.</li>
    </ul>
    <h3>Переваги:</h3>
    <ul>
      <li>Отримайте професійну консультацію безкоштовно.</li>
      <li>Зрозумійте, як правильно реалізувати вашу ідею у вигляді додатку.</li>
      <li>Отримайте рекомендації від досвідчених розробників.</li>
      <li>Оптимізуйте стратегію та ефективність вашого проекту.</li>
    </ul>
    <form className="Form-Modal">
      <input type="text" placeholder="Ім'я" />
      <input type="email" placeholder="Email" />
      <button type="submit">Відправити</button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default Modal;