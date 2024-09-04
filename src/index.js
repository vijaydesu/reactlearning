import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-1';
import App1_1 from './App-1_1';
import ProfileApp2 from './App-2';
import ProductList from './App-3';
import ButtonClickEvent from './App-4';
import GlobalButtonClickEvent from './App-5';

import TIC from './tictactoe/TIC8'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1_1/>
    <ProfileApp2/>
    <ProductList/>
    <ButtonClickEvent/>
    <GlobalButtonClickEvent/>
    <TIC />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
