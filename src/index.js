import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GestVend from './components/ListaVentas';
import UpdateVend from './components/UpdateVend';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch}  from "react-router-dom";

const rootElement=document.getElementById('root');
ReactDOM.render(

    <BrowserRouter>
    
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/pag" component={GestVend} />
    <Route path="/updateVd" component={UpdateVend} />
    
    </Switch>
    </BrowserRouter>,rootElement
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
