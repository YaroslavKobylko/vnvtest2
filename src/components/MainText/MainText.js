import React, { useState } from 'react';
import './MainText.css';
import Brief from '../Brief/Brief';

function MainText() {
  const [briefVisible, setBriefVisible] = useState(false);

  const toggleBrief = () => {
    setBriefVisible(!briefVisible);
  };

  return (
    <div className="main-content">
      <div className="main-content-text">
        <h1 className="main-content-title">
          Easy, quality, IT-<span className="highlight-text">w</span>inning <span className="highlight-text">solution</span>s for your business
        </h1>
      </div>
      <div className="main-content-button">
        {}
        <button onClick={toggleBrief} className="main-content-link">
          {briefVisible ? 'Close Brief' : 'Contact Us'}
        </button>
      </div>
      {briefVisible && <Brief onClose={toggleBrief} />}
    </div>
  );
}

export default MainText;