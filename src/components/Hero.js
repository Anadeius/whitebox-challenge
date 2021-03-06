import React, { Component } from 'react';

class Hero extends Component {
    render() {
        const heroStyle = {
            backgroundImage: `url('images/heading-pages-02.jpg')`
        }

        return (
            <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={heroStyle}>
                <h2 className="l-text2 t-center">
                    Women
                </h2>
                <p className="m-text13 t-center">
                    New Arrivals Women Collection 2018
                </p>
            </section>
        )
    }
}

export default Hero;