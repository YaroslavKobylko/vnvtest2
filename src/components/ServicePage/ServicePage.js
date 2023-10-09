import React, { useState } from 'react';
import LandingPhoto from './services_landing-illustration.svg';
import CorporatePhoto from './services_corporat-illustration.svg';
import ConsultationPhoto from './services_consultation-illustration.svg';
import AuditPhoto from './services_audit-illustration.svg';
import ShopPhoto from './services_shop-illustration.svg';
import './ServicePage.css';

function ServicePage() {
  const [selectedService, setSelectedService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'Landing Page',
      content:<> Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація<br/> <br/> {' '}
      <span className="additional-info">
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію
        та швидко підвести його до покупки.
      </span></>,
      image: LandingPhoto,
    },
    {
      id: 2,
      title: 'Багатосторінковий сайт',
      content:<> Величезне поле для креативу<br/> <br/> {' '}
      <span className="additional-info">
      Ви можете використати будь-яку кількість сторінок для того, щоб розповісти про свій бізнес,
       показати свій продукт, презентувати компанію або просто поділитись корисною інформацією
      </span></>,
      image: CorporatePhoto,
    },
    {
      id: 3,
      title: 'Інтернет магазин',
      content:<> Зручний сайт для бізнесу, який дозволить користувачам:
      Швидко знайти потрібний товар,
      Зробити замовлення у будь-який час<br/> <br/> {' '}
      <span className="additional-info">
      Каталог, зручна фільтрація, особистий кабінет і продуманий до деталей 
      інтерфейс точно збільшать кількість ваших клієнтів завдяки комфортному користуванню та легкому оформленню покупки
      </span></>,
      image: ShopPhoto,
    },
    {
      id: 4,
      title: 'Аудит сайту',
      content:<> Детальний аудит вашого сайту по всім можливим параметрам<br/> <br/> {' '}
      <span className="additional-info">
      В аудиті розглядаються: дизайн, текст, конверсія, технічні данні, індексація пошуковими системами та багато інших характеристик
      </span></>,
      image: AuditPhoto,
    },
    {
      id: 5,
      title: 'Індивідуальна консультація',
      content:<> Ідеальний початок для просування вашого бізнесу в інтернеті<br/> <br/> {' '}
      <span className="additional-info">
      Окрім готового фундаменту для власного сайту, ви отримаєте рекомендації, які допоможуть вам швидко досягнути успіху в просуванні свого бізнесу
      </span></>,
      image: ConsultationPhoto,
    },
    {
      id: 6,
      title: 'Особистий сайт',
      content:<> "Особистий сайт - це ідеальний варіант для тих, хто бажає створити свою онлайн присутність і поділитися власними ідеями, досягненнями та інтересами<br/> <br/> {' '}
      <span className="additional-info">
      Цей тип веб-сайту надає вам можливість створити коротку, але змістовну презентацію себе чи своєї діяльності
      </span></>,
      image: LandingPhoto , 
    },
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  return (
    <div className="service-page">
      <h1>Послуги</h1>
      <div className="service-menu">
        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className={selectedService === service.id ? 'active' : ''}
              onClick={() => handleServiceClick(service.id)}
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-content">
        {selectedService !== null ? (
          <>
            <div className="service-left">
                <div className="content-service">
              <h2>{services[selectedService - 1].title}</h2>
              <p>{services[selectedService - 1].content}</p>
              <div className="button-container">
                <button className="order-button">Хочу</button>
              </div>
            </div>
            </div> 
            <div className="service-right">
              <img
                src={services[selectedService - 1].image}
                alt={services[selectedService - 1].title}
              />
            </div>
          </>
        ) : (
          <p>Виберіть послугу для перегляду вмісту.</p>
        )}
      </div>
    </div>
  );
}

export default ServicePage;