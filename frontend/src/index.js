import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTachometerAlt,
  faBox,
  faExchangeAlt,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTachometerAlt, faBox, faExchangeAlt, faUser, faCalendarAlt);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
