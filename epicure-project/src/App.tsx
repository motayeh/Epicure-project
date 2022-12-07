import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Componnents/Layout/Layout';
import Home from './Componnents/Home/Home';
import Resturants from './Componnents/Resturants/Resturants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Homepage_resturant_:sex" element={<Resturants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
