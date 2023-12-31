import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-kd7m2auzvlg2xi1r.us.auth0.com"
      clientId="q8RGFVbjoiNkyxlnhGrnLAcbLrEk7XXM"
      authorizationParams={{
        redirect_uri: "http://localhost:3000"
      }}
    >
      <App />
    </Auth0Provider>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
