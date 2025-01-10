import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
import ShopApplicationWrapper from './pages/ShopApplicationWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider: 
  // 1) Makes a specific data (e.g., a Redux store, context value) globally accessible to all components in the app.
  // 2) Eliminates "prop drilling"
    <Provider store={store}>
      {/* provide routing configuration (router) to your React application. */}
    <RouterProvider router={router}>
      {/* global navigation bar */}
        <ShopApplicationWrapper />
      
    </RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
