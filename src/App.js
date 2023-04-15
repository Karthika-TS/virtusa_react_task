import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Product, Products, ContactPage, Cart, Checkout, PageNotFound, EmptyCart } from "./pages"
import Preview from './pages/Preview';

function App() {
    return (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />

      </Routes>
    </Provider>
  </BrowserRouter>
);
    }

export default App;
