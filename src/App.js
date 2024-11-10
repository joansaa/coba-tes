import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTransaction from './pages/Add';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import EditTransaction from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';
import TransactionList from './pages/Transaction';
import './index.css';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit/:id" element={<EditTransaction />} />
            <Route path="/transaction/:id" element={<Detail />} />
        </Routes>
    </Router>
    
  );
}

export default App;