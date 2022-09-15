import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis/lib/index.cjs';
// import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMod>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode >
);
