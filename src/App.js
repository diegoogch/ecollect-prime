import React from 'react';
import './App.css';
import {BrowserRouter,Routes as Switch,Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Index from './components/index/index';
import Registrar from './components/registrar/Registrar';



function App() {
  return (
      // <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Index/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registrar" element={<Registrar/>} />
        </Switch>
      // </BrowserRouter>
  );
}

export default App;
