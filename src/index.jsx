import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
//import CardList from './CardList'                  ==>does not used
//import reportWebVitals from './reportWebVitals';   ==>does not used
///import { friends } from './friends';              ==>does not used
import App from './containers/App';



const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <App />
)
