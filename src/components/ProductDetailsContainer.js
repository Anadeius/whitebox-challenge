import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import ProductDetails from './ProductDetails';
import ProductDetailsRelated from './ProductDetailsRelated';

import 'jquery';
import 'select2';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/themify/themify-icons.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/elegant-font/html-css/style.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../css/select2.css';
import '../vendor/slick/slick.css';
import '../css/util.css';
import '../css/main.css';

class ProductDetailsContainer extends Component {
    state = {
        product: []
    }

    async componentDidMount(){
        let product = await fetch(`http://localhost:1003/product/${this.props.match.params.id}`).then((response) => response.json());
        this.setState({product});
    }

    render() {
        return (
            <div>
                <Breadcrumb />
                <ProductDetails product={this.state.product} />
                <ProductDetailsRelated />
            </div>
        )
    }
}

export default ProductDetailsContainer;