import React, { useState, useEffect } from 'react';
import './Adventages.css';

function Adventages() {
  const [animateBlocks, setAnimateBlocks] = useState(false);

  useEffect(() => {
    setAnimateBlocks(true);
  }, []);

  const advantages = [
    {
      title: 'Якість високого рівня',
      description: 'Наша компанія завжди забезпечує високу якість в усіх аспектах роботи.',
    },
    {
      title: 'Досвідчена команда',
      description: 'Ми маємо досвідчену команду фахівців, готових вирішити ваші завдання.',
    },
    {
      title: 'Швидка доставка проектів',
      description: 'Ми завжди дотримуємось графіків та доставляємо проекти вчасно.',
    },
    {
      title: 'Індивідуальний підхід',
      description: 'Ми розробляємо рішення, які враховують унікальні потреби кожного клієнта.',
    },
    {
      title: 'Сучасні технології',
      description: 'Ми використовуємо сучасні технології розробки для досягнення найкращих результатів.',
    },
    {
      title: 'Задоволені клієнти',
      description: 'Задоволені клієнти - наше головне досягнення та найкраща реклама.',
    },
  ];

  return (
    <div className="blocks-container">
      {advantages.map((advantage, index) => (
        <div key={index} className={`block ${animateBlocks ? 'animate-in' : ''}`}>
          <h3>{advantage.title}</h3>
          <p>{advantage.description}</p>
        </div>
      ))}
      <div className="button-container">
        <button className="order-button">Замовити</button>
      </div>
    </div>
  );
}

export default Adventages;