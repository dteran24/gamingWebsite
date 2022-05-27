import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers';



const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
    

  </React.StrictMode>,
  document.getElementById('root')
);


