import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter'; // Шлях до файлу маршрутизації

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root')
)