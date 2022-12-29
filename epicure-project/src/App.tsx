import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Componnents/Layout/Layout';
import Home from './Componnents/Home/Home';
import Resturants from './Componnents/Resturants/Resturant/Resturants';
import ResturantPage from './Componnents/Resturants/Resturant/ResturantPages/ResturantPage';
import ResturantPageDish from './Componnents/Resturants/Resturant/ResturantPageOfDish/ResturantPageDish';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="homePage_restaurants_:dep" element={<Resturants />} />
          <Route path="homePage_restaurants/:id" element={<ResturantPage />} />
          <Route path="/restaurant/Page/:id2" element={<ResturantPageDish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
