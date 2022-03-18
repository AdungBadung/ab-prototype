import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
