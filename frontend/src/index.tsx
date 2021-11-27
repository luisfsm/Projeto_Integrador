import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';

ReactDOM.render(
  <React.StrictMode>

    <App /> 
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();