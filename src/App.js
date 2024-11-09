import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/Add';
import TransactionList from './pages/Transaction';
import Detail from './pages/Detail';
import './index.css';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction/:id" element={<Detail />} />
        </Routes>
    </Router>
    
  );
}

export default App;