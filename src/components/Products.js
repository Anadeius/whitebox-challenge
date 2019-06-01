import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Products extends Component {
    render() {
        const products = this.props.products;

        const Products = products.map(product => (
            <ProductCard key={product._id} product={product} />
        ));

        return (
            <div className="row">
                {Products}
            </div>
        )
    }
}

export default Products;