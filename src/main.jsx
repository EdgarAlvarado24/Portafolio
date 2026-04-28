import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider } from './context/LanguageContext';
import './styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);