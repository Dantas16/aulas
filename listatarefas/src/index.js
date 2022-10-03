import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHeader from './components/mainHeader/MainHeader';
import Tarefa  from './tarefaLista/Tarefa';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainHeader />
    <Navbar />
    <Tarefa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
