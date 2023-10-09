import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css';

function LoadingAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // При завантаженні компонента показати анімацію на протязі 2 секунд
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    // Закрити анімацію після 2 секунд
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className={`animation-container ${showAnimation ? 'show' : 'hide'}`}>
      {/* Додайте анімацію .lds-roller */}
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
      {/* Тут ви можете додати власний контент або текст завантаження */}
    </div>
  );
}

export default LoadingAnimation;