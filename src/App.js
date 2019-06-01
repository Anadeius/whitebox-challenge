import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './components/ProductContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path={['/', 'index.html', '/product.html']} component={ProductContainer} />
            <Route exact path='/:id' component={ProductDetailsContainer} />
          </Switch>
        <Footer />
      </BrowserRouter>
    )
  };
}

export default App;
