import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mobile from './views/mobile/index'
import reportWebVitals from './reportWebVitals';
import {isMobile} from "react-device-detect";
// Import Main styles for this application
import './scss/style.scss';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {isMobile && <Mobile/>}
      {!isMobile && <App />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
