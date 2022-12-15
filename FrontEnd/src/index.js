import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react'
import {store} from "./Redux/store"
import { Provider} from 'react-redux';

=======
import { ChakraProvider} from '@chakra-ui/react';
>>>>>>> 59f447ac2c67c750708c3dbde2da7ef4c47a4563


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
      
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
