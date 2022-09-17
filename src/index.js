import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       
      <MoralisProvider serverUrl="https://mrd1bfebptx3.usemoralis.com:2053/server" appId="QmoYZ6ITVauXI1K7yBxsdcl0ag0jqfR77RTblpGm">
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);
