import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis/lib/index.cjs';
// import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MoralisProvider
      serverUrl='https://kntrpbxtkn6v.usemoralis.com:2053/server'
      appId='4XPaIOw5uIpkQeclvvR3bhRT41rMED7at7G3CqXH'
    > */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </MoralisProvider> */}
  </React.StrictMode >
);
