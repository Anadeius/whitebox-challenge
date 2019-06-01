import React, { Component } from 'react';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/themify/themify-icons.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/elegant-font/html-css/style.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';

import '../css/util.css';
import '../css/main.css';

import $ from 'jquery';
import 'slick-carousel';

import 'select2';
import '../css/select2.css';

class ProductDetails extends Component {
    componentDidMount(){
		$('.slick2').slick({
            rows:0,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick2'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
            responsive: [
                {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
                },
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
		});

		$('.slick3').slick({
            rows:0,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: true,
            appendDots: $('.wrap-slick3-dots'),
            dotsClass:'slick3-dots',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: false,
            customPaging: function(slick, index) {
                var portrait = $(slick.$slides[index]).data('thumb');
                return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
            },
		});

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
		});

		$('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
    	$('.active-dropdown-content .dropdown-content').slideToggle('fast');

		$('.js-toggle-dropdown-content').on('click', function(){
			$(this).toggleClass('show-dropdown-content');
			$(this).parent().find('.dropdown-content').slideToggle('fast');
		});
    }

    render() {
		const product = this.props.product;

        return (
            <div className="container bgwhite p-t-35 p-b-80">
            		<div className="flex-w flex-sb">
            			<div className="w-size13 p-t-30 respon5">
            				<div className="wrap-slick3 flex-sb flex-w">
            					<div className="wrap-slick3-dots"></div>

            					<div className="slick3">
            						<div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
            							<div className="wrap-pic-w">
            								<img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
            							</div>
            						</div>

            						<div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
            							<div className="wrap-pic-w">
            								<img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
            							</div>
            						</div>

            						<div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
            							<div className="wrap-pic-w">
            								<img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
            							</div>
            						</div>
            					</div>
            				</div>
            			</div>

            			<div className="w-size14 p-t-30 respon5">
            				<h4 className="product-detail-name m-text16 p-b-13"> { product.name } </h4>

            				<span className="m-text17"> ${ product.price } </span>

            				<p className="s-text8 p-t-10">
            					{ product.about }
            				</p>

            				<div className="p-t-33 p-b-60">
            					<div className="flex-m flex-w p-b-10">
            						<div className="s-text15 w-size15 t-center"> Size </div>

            						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
            							<select className="selection-2" name="size">
            								<option>Choose an option</option>
            								<option>Size S</option>
            								<option>Size M</option>
            								<option>Size L</option>
            								<option>Size XL</option>
            							</select>
            						</div>
            					</div>

            					<div className="flex-m flex-w">
            						<div className="s-text15 w-size15 t-center"> Color </div>

            						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
            							<select className="selection-2" name="color">
            								<option>Choose an option</option>
            								<option>Gray</option>
            								<option>Red</option>
            								<option>Black</option>
            								<option>Blue</option>
            							</select>
            						</div>
            					</div>

            					<div className="flex-r-m flex-w p-t-10">
            						<div className="w-size16 flex-m flex-w">
            							<div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
            								<button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
            									<i className="fs-12 fa fa-minus" aria-hidden="true"></i>
            								</button>

            								<input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1" />

            								<button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
            									<i className="fs-12 fa fa-plus" aria-hidden="true"></i>
            								</button>
            							</div>

            							<div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
            								<button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
            									Add to Cart
            								</button>
            							</div>
            						</div>
            					</div>
            				</div>

            				<div className="p-b-45">
            					<span className="s-text8 m-r-35">SKU: MUG-01</span>
            					<span className="s-text8">Categories: {product.tags} </span>
            				</div>

            				<div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
            					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            						Description
            						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
            						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            					</h5>

            					<div className="dropdown-content dis-none p-t-15 p-b-23">
            						<p className="s-text8">
            							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            						</p>
            					</div>
            				</div>

            				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
            					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            						Additional information
            						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
            						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            					</h5>

            					<div className="dropdown-content dis-none p-t-15 p-b-23">
            						<p className="s-text8">
            							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            						</p>
            					</div>
            				</div>

            				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
            					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            						Reviews (0)
            						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
            						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            					</h5>

            					<div className="dropdown-content dis-none p-t-15 p-b-23">
            						<p className="s-text8">
            							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            						</p>
            					</div>
            				</div>
            			</div>
            		</div>
            	</div>
        );
    }
}

export default ProductDetails;