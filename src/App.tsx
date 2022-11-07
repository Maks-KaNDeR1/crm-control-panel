import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { SearchAddresses } from './components/SearchAddresses/SearchAddresses';
import { matchMedia } from './utils/matchMedia';

function App() {


  return (
    <div className="app-wrapper">
      <Header name='Максим' lastName='Кандерский' />
      {!matchMedia(768) && <Navbar />}
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/address' element={<SearchAddresses />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
