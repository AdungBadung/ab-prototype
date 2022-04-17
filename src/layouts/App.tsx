import Settings from '../pages/Settings';
import Search from '../pages/Search';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
