import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Navigate, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { SearchAddresses } from './components/SearchAddresses/SearchAddresses';


function App() {

  const [mobile, setMobile] = useState(false)

  const myFunction = (x: any) => {
    if (x.matches) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }
  useEffect(() => {
    const x = window.matchMedia("(max-width: 768px)")
    myFunction(x)
    x.addListener(myFunction)
  }, [])

  return (
    <div className="app-wrapper">
      <Header name='Максим' lastName='Кандерский' />
      {!mobile && <Navbar />}
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/address' element={<SearchAddresses mobile={mobile} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
