import React, { useState, useEffect } from 'react';
import './brief.css';

function Brief({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="brief">
          <button className="brief-close-button" onClick={handleClose}>
            <span></span>
            <span></span>
          </button>
          <div className="brief-content">
              <div className="brief-left">
                <h2>Have an idea?<br/>
                Tell us about it</h2>
                <a className="email-link" href="mailto:team@vnv.solutions">team@vnv.solutions</a>
                <a className="map-link" href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835065,24.0144865,16.5z/data=!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk" rel="noreferrer" target="_blank">Karla Mikl'osha, 7<br/>Lviv, Ukraine</a>
              </div>
              <div>
              <div className="brief-form">
  <form className="input-container" onSubmit={handleSubmit}>
    <label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ім'я"
      />
    </label>
    <label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Електронна пошта"
      />
    </label>
    <label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Короткий опис"
      />
    </label>
    <button type="submit">Send</button>
  </form>
</div>
<div className="social-links">
  <a href="https://www.facebook.com/people/VNV-Solutions/100088433736254/" target="_blank" className="social-link" rel="noreferrer">Facebook</a>
  <a href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
  <a href="https://t.me/vnv_solutions" target="_blank" className="social-link" rel="noreferrer">Telegram</a>
  <a href="https://www.linkedin.com/company/vnv-tech/" className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
  <a href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1" className="social-link" target="_blank" rel="noreferrer">TikTok</a>
</div>
</div>
            </div>
          </div>
      )}
    </>
  );
}

export default Brief;