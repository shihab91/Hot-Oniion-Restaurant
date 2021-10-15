import React from 'react';
import About from '../About/About';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;