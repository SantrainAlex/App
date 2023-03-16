import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Import Main styles for this application
import './scss/style.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Mobile from "./views/mobile";
import Login from "./views/mobile/loginAndRegister/Login";
import Register from "./views/mobile/loginAndRegister/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
          <Routes>
            <Route
                path="/"
                element={<Mobile/>}
            />
            <Route
                path="/Login"
                element={<Login/>}
            />
            <Route
                path="/Register"
                element={<Register/>}
            />
          </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
