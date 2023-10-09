import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App/app';
import FAQ from './components/FAQ/FAQ';
import Service from './components/Service/Service';
import WhyUs from './components/WhyUs/WhyUs';
import OurProjects from './components/OurProjects/OurProjects';

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/service" element={<Service />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/projects" element={<OurProjects />} />
    </Routes>
  );
}

export default AppRouter;