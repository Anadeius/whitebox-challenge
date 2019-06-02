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
import '../css/select2.css';
import '../vendor/slick/slick.css';
import '../css/util.css';
import '../css/main.css';

class ProductContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            filterCategory: '',
            filterMinPrice: '',
            filterMaxPrice:'',
            filterColor: [],
            filterSearchQuery: '',
            sortItemsVal: '',
            sortPriceVal: ''
        };

        this.handleSearchInput.bind(this);
        this.handlePrice.bind(this);
        this.handleSort.bind(this);
        this.handlePriceSort.bind(this);
    }

    async componentDidMount() {
        let products = await fetch('http://localhost:1003/products')
                                .then(response => response.json())
                                .catch((err) => console.log(`Error fetching product data from API. Message: ${err}`));

        this.setState({
            products,
            filteredProducts: products
        });

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
        });
        
        $("#sort").on('select2:select', (e) => {
            this.handleSort(e.target.value);
        });

        $("#priceSort").on('select2:select', (e) =>{
            this.handlePriceSort(e.target.value);
        });
    }

    /** Current Dataset doesn't allow for category filtering */
    filterCategory = (category) => {
        let productData = this.state.products;
        productData = productData.filter(product => product.category === category);

        this.setState({
            filteredProducts: productData
        });
    }

    handlePrice = (price, value) => {
        if(price === 'min'){
            this.filterPrice(value, this.state.filterMaxPrice);
        }
        else{
            this.filterPrice(this.state.filterMinPrice, value);
        }
    };

    filterPrice = (minPrice, maxPrice) => {
        let productData = this.state.products;
        
        if(minPrice && maxPrice){
            productData = productData.filter(product => (product.price >= minPrice && product.price <= maxPrice));
        }

        this.setState({
            filteredProducts: productData,
            filterMinPrice: minPrice,
            filterMaxPrice: maxPrice
        });
    }

    /** Current Dataset doesn't allow for color filtering */
    filterColors = (colors) => {
        let productData = this.state.products;
        productData = productData.filter(product => colors.includes(product.color));

        this.setState({
            filteredProducts: productData
        });
    }

    handleSearchInput = (e) => {
        let searchInput = e.target.value;
        this.setState({
            filterSearchQuery: searchInput
        });
        this.filterSearch(searchInput);
    }

    filterSearch = (searchQuery) => {
        let productData = this.state.products;
        productData = productData.filter(product => {
            let name = product.name.toLowerCase();

            return name.substring(0, searchQuery.length) === searchQuery.toLowerCase();
        });

        this.setState({
            filteredProducts: productData
        });
    }

    handleSort = (sortValue) => {
        let productData = this.state.filteredProducts;

        switch (sortValue) {
            case 'popularity':
                break;
            case 'lowToHigh': 
                productData.sort((val1, val2) => val1.price - val2.price);
                this.setState({
                    filteredProducts: productData,
                    sortItemsVal: 'lowToHigh'
                });
                break;
            case 'highToLow':
                productData.sort((val1, val2) => val2.price - val1.price);
                this.setState({
                    filteredProducts: productData,
                    sortItemsVal: 'highToLow'
                });
        };
    }

    handlePriceSort = (priceVal) => {
        let productData = this.state.filteredProducts;
        let filteredData;

        this.setState({
            sortPriceVal: priceVal
        });

        switch (priceVal) {
            case '0to50':
                filteredData = productData.filter(product => product.price <= 50);
                this.setState({
                    filteredProducts: filteredData,
                });
                break;
            case '50to100':
                this.filterPrice(50, 100);
                break;
            case '100to150':
                this.filterPrice(100, 150);
                break;
            case '150to200':
                this.filterPrice(150, 200);
                break;
            case '200':
                filteredData = productData.filter(product => product.price >= 200);
                this.setState({
                    filteredProducts: filteredData,
                });
        }
    }

    render() {
        const {
            filteredProducts,
            filterMinPrice,
            filterMaxPrice,
            filterColors,
            filterSearchQuery,
            sortItemsVal,
            sortPriceVal
        } = this.state;

        return (
            <div>
                <Hero />
                <section className="bgwhite p-t-55 p-b-65">
                    <div className="container">
                        <div className="row">
                            <Sidebar
                                minPrice={filterMinPrice}
                                maxPrice={filterMaxPrice}
                                colors={filterColors}
                                searchQuery={filterSearchQuery}
                                handleSearch={this.handleSearchInput}
                                handlePrice={this.handlePrice}
                            />
                            {/* Product Sorting Options and Product Count */}
                            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                                <div className="flex-sb-m flex-w p-b-35">
						            <div className="flex-w">
							            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								            <select className="selection-2" id="sort" name="sorting" value={sortItemsVal}>
									            <option value="default">Default Sorting</option>
									            <option value="popularity">Popularity</option>
									            <option value="lowToHigh">Price: low to high</option>
									            <option value="highToLow">Price: high to low</option>
								            </select>
							            </div>

							            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
							            	<select className="selection-2" id="priceSort" name="priceSorting" value={sortPriceVal}>
							            		<option value="default">Price</option>
							            		<option value="0to50">$0.00 - $50.00</option>
							            		<option value="50to100">$50.00 - $100.00</option>
							            		<option value="100to150">$100.00 - $150.00</option>
							            		<option value="150to200">$150.00 - $200.00</option>
							            		<option value="200">$200.00+</option>
							            	</select>
							            </div>
						            </div>

						            <span className="s-text8 p-t-5 p-b-5">
						            	Showing 1–12 of 16 results
						            </span>
					            </div>
                            {/* End Product Sorting Options and Product Count */}
                            <Products
                                products={filteredProducts}
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