import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './store/storeReducer';


 const storee = store()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={storee}>
    <App />
  </Provider>
);

