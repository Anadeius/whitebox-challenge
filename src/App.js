import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './components/ProductContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path={['/', '/product.html']} component={ProductContainer} />
        <Route exact path='/product-detail.html/:id' component={ProductDetailsContainer} />
        <Footer />
      </BrowserRouter>
    )
  };
}

export default App;
