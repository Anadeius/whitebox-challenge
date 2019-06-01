import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Products extends Component {
    render() {
        const products = this.props.products;

        const ProductsList = products.map(product => (
            <ProductCard key={product._id} product={product} />
        ));

        return (
            <div className="row">
                {ProductsList}
            </div>
        )
    }
}

export default Products;