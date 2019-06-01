import React, { Component } from 'react';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Products from './Products';
import $ from 'jquery';
import 'select2';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/themify/themify-icons.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/elegant-font/html-css/style.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
//import '../vendor/select2/select2.min.css';
import '../css/select2.css';
import '../vendor/slick/slick.css';
import '../css/util.css';
import '../css/main.css';

class ProductContainer extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        //let products = await fetch('http://localhost:1003/products').then(response => response.json());
        //this.setState({products});
        let products = [{
            "name":'Herschel supply co 25l',
            "price":'75.00',
            "image":'item-02.jpg'
        },
        {
            "name":'Denim jacket blue',
            "price":'92.50',
            "image":'item-03.jpg'
        },
        {
            "name":'Frayed denim shorts',
            "price":'29.50',
            "image":'item-07.jpg'
        },
        {
            "name":'Coach slim easton black',
            "price":'165.90',
            "image":'item-01.jpg'
        },
        {
            "name":'Herschel supply co 25l',
            "price":'75.00',
            "image":'item-02.jpg'
        },
        {
            "name":'Denim jacket blue',
            "price":'92.50',
            "image":'item-03.jpg'
        },
        {
            "name":'Frayed denim shorts',
            "price":'29.50',
            "image":'item-07.jpg'
        },
        {
            "name":'Coach slim easton black',
            "price":'165.90',
            "image":'item-01.jpg'
        },
        {
            "name":'Herschel supply co 25l',
            "price":'75.00',
            "image":'item-02.jpg'
        },
        {
            "name":'Denim jacket blue',
            "price":'92.50',
            "image":'item-03.jpg'
        },
        {
            "name":'Frayed denim shorts',
            "price":'29.50',
            "image":'item-07.jpg'
        },
        {
            "name":'Coach slim easton black',
            "price":'165.90',
            "image":'item-01.jpg'
        }];

        this.setState({products});

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
		});
    }

    render() {
        return (
            <div>
                <Hero />
                <section className="bgwhite p-t-55 p-b-65">
                    <div className="container">
                        <div className="row">
                            <Sidebar />
                            {/* Product Sorting Options and Product Count */}
                            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                                <div className="flex-sb-m flex-w p-b-35">
						            <div className="flex-w">
							            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								            <select className="selection-2" name="sorting">
									            <option>Default Sorting</option>
									            <option>Popularity</option>
									            <option>Price: low to high</option>
									            <option>Price: high to low</option>
								            </select>
							            </div>

							            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
							            	<select className="selection-2" name="sorting">
							            		<option>Price</option>
							            		<option>$0.00 - $50.00</option>
							            		<option>$50.00 - $100.00</option>
							            		<option>$100.00 - $150.00</option>
							            		<option>$150.00 - $200.00</option>
							            		<option>$200.00+</option>
							            	</select>
							            </div>
						            </div>

						            <span className="s-text8 p-t-5 p-b-5">
						            	Showing 1–12 of 16 results
						            </span>
					            </div>
                            {/* End Product Sorting Options and Product Count */}
                            <Products
                                products={this.state.products}
                            />
                            <div className="pagination flex-m flex-w p-t-26">
						        <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
						        <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
					        </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductContainer;