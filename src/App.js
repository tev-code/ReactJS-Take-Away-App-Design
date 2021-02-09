import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import {productsData, productsDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products heading='burgers' data={productsData}/>
    <Feature/>
    <Products heading='wings and ribs' data={productsDataTwo}/>
    <Footer/>
    </Router>
  );
}

export default App;
