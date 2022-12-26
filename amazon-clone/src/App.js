import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import ShoppingBasket from './component/ShoppingBasket';
import CheckoutAd from './component/CheckoutAd';

function App() {
  return (
    <Router>
         <Header/>
         <Routes>
            <Route exact path='/' element={
              <React.Fragment>
                <Banner/>
                <ProductList/>
              </React.Fragment>
            }/>
            <Route exact path='/checkout' element={
              <React.Fragment>
                <CheckoutAd/>
                <ShoppingBasket/>
              </React.Fragment>
            }/>
         </Routes>
    </Router>
    // <div className="App">
       
    //     <ShoppingBasket/>
    //     <CheckoutAd/>
    //     {/* <Banner/>
    //     <ProductList/> */}
    // </div>
  );
}

export default App;
