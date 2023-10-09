import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css';

function LoadingAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className={`animation-container ${showAnimation ? 'show' : 'hide'}`}>
      {}
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {}
    </div>
  );
}

export default LoadingAnimation;